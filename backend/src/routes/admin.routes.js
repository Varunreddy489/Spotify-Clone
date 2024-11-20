import { Router } from "express";
import {
  checkAdmin,
  createAlbum,
  createSong,
  deleteAlbum,
  deleteSong,
} from "../controller/admin.controller.js";
import { protectedRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.use(protectedRoute, requireAdmin);

router.get("/check", checkAdmin);

router.post("/songs", createSong);
router.post("/albums", createAlbum);
router.delete("/songs/:id", deleteSong);
router.delete("/albums/:id", deleteAlbum);

export default router;
