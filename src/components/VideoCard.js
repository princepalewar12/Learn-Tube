import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  if (info === undefined) return null;
  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="wwe-thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li> 
        <li>{statistics?.viewCount} Views</li>
      </ul>
    </div>
  );
};

// Higher Order Component(HOC) which takes a component and return a component from it
export const AdVideoCard =({info})=>{
  return(
    <div className="p-1 m-1 border-2 border-red-900">
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard;
