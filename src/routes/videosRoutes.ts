import { Router } from "express";
import { video as video } from "./videosController";
const router = Router();

router.get("/videos", video.getVideos);
router.get("/videos/:id", video.getVideo);
router.post("/videos", video.createVideo);
router.delete("/videos/:id", video.deleteVideo);
router.put("/videos/:id", video.updateVideo);

export default router;
