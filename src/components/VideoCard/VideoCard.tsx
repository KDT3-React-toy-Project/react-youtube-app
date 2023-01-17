import React from "react";
import "./VideoCard.scss";
import { FiMoreVertical } from "react-icons";

export default function VideoCard() {
  return (
    <div className="videoCard">
      <div className="videoPreview">
        PreviewImg
        <div className="videoDuration">
          <span>00:00</span>
        </div>
      </div>
      <div className="videoInfoContainer">
        <div className="avatarContainer">
          <img src="https://cdn.pixabay.com/photo/2016/07/03/18/36/youtube-1495277_960_720.png" alt="" />
        </div>
        <div className="videoTextContainer">
          <h3>videoTitle</h3>
          <div className="videoInfo">
            <div className="channelName">channelname</div>
            <div className="metatag">metatag</div>
          </div>
        </div>
        <div className="dotContainer">
          <FiMoreVertical />
        </div>
      </div>
    </div>
  );
}
