import React from "react";

const VideoCard = ({ info }) => {
  if (!info || !info.snippet || !info.snippet.thumbnails) {
    return <div>No video information available</div>;
  }
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const titleWords = title.split(" ");
  const shortTitle = titleWords.slice(0, 4).join(" ");

  return (
    <div className=" w-72 shadow border border-gray-300 rounded-lg p-4">
      <img className="rounded-lg " src={thumbnails.medium.url} alt={title} />
      <ul>
        <li className="py-2 font-bold">{shortTitle}</li>
        <li>{channelTitle}</li>
        <li>views:{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
