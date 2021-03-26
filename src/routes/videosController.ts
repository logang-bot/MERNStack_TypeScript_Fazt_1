import { RequestHandler } from "express";
import Video from "./video";
const ctrl: any = {};
// Another way
// const getVideos : RequestHandler = (req,res)=>{

// }
ctrl.getVideos = async (req: any, res: any) => {
  try {
    return res.json(await Video.find({}));
  } catch (error) {
    return res.json(error);
  }
  //   res.json(await Video.find({}));
};
ctrl.createVideo = async (req: any, res: any) => {
  const videoFound = await Video.findOne({ url: req.body.url });
  if (videoFound)
    return res.status(301).json({ message: "The URL already exists" });
  const video = new Video(req.body);
  await video.save();
  //   console.log(video);
  res.json("saved video");
  //   res.json("creating video");
};
ctrl.getVideo = async (req: any, res: any) => {
  const videoFound = await Video.findById(req.params.id);
  if (videoFound) return res.json(await Video.findById(req.params.id));
  return res.status(204).json();
};
ctrl.deleteVideo = async (req: any, res: any) => {
  await Video.findByIdAndDelete(req.params.id);
  res.json({ message: "video deleted succesfully " });
};
ctrl.updateVideo = async (req: any, res: any) => {
  const videoFound = await Video.findOne({ url: req.body.url });
  if (videoFound)
    return res.status(301).json({ message: "The URL already exists" });
  const videoUpd = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({ message: "video updated succesfully", data: videoUpd });
};

export { ctrl as video };
