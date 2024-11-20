import fs from "fs";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import cron from "node-cron";
import express from "express";
import { createServer } from "http";
import fileUpload from "express-fileupload";
import { clerkMiddleware } from "@clerk/express";

import { connectDB } from "./lib/db.js";
import statRoutes from "./routes/stat.routes.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import songRoutes from "./routes/song.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import albumRoutes from "./routes/album.routes.js";
import { initializeSocket } from "./lib/socket.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();

const httpServer = createServer(app);
initializeSocket(httpServer);

const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true,
    limits: {
      fileSize: 10 * 1024 * 1024, // 10 MB
    },
  })
);

const tempDir = path.join(process.cwd(), "tmp");
cron.schedule("0 * * * *", () => {
  if (fs.existsSync(tempDir)) {
    fs.readdir(tempDir, (err, files) => {
      if (err) {
        console.log("error", err);
        return;
      }
      for (const file of files) {
        fs.unlink(path.join(tempDir, file), (err) => {});
      }
    });
  }
});

app.use(clerkMiddleware());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/stats", statRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/albums", albumRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.use((err, req, res, next) => {
  res.status(500).json({
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message,
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
