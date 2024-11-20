import {Router} from "express";
import {getAllSongs, getFeaturedSongs, getMadeForYouSongs, getTrendingSongs} from "../controller/song.controller.js";
import {protectedRoute, requireAdmin} from "../middleware/auth.middleware.js";

const router = Router();

router.get("/featured", getFeaturedSongs);
router.get("/trending", getTrendingSongs);
router.get("/made-for-you", getMadeForYouSongs);
router.get("/", protectedRoute, requireAdmin, getAllSongs);

export default router;