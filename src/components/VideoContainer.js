import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();  
  }, []);

  const getVideos = async () => {
    const videoData = await fetch(YOUTUBE_VIDEOS_API);
    const json = await videoData.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {/* The below AdVideoCard is a higher order component(HOC) */}
      {videos[0] && <AdVideoCard info={videos[0]}/>}
      {videos.map((video) => (
        <div key={video.id}>
          <Link to={"/watch?v=" + video.id} >
            <VideoCard  info={video} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
