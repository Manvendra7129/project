import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoCointainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    getVideo();
  }, []);
  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json);
    setVideo(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {video.map((videos) => (
        <VideoCard key={videos.id} info={videos} />
      ))}
    </div>
  );
};

export default VideoCointainer;
