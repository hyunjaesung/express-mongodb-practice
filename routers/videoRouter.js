import express from "express";
import routes from "../routers";



export const videoRouter = express.Router();


videoRouter.get(routes.upload, (req,res) => res.send("upload"));
videoRouter.get(routes.videoDetail, (req,res) => res.send("videodeail"));
videoRouter.get(routes.editVideo, (req,res) => res.send("editvideo"));
videoRouter.get(routes.deleteVideo, (req,res) => res.send("deletevideo"));