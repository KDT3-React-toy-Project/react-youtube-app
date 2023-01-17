import React, { useEffect, useState } from 'react';
import './VideoCard.scss';
import { FiMoreVertical } from 'react-icons/fi';
import axios from 'axios';

export default function VideoCard() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = (await axios.get('./videos/popular.json')).data.items;
      console.log('res', res);
      setDatas(res);
    };
    getData();
  }, []);

  console.log('datas', datas);

  return (
    <>
      {datas.map((data) => (
        <div className="videoCard" key={data.id}>
          <div className="videoPreview">
            <img src={data.snippet.thumbnails.high.url} alt={data.snippet.title} />
            <div className="videoDuration">
              <span>{data.contentDetails.duration}</span>
            </div>
          </div>
          <div className="videoInfoContainer">
            <div className="avatarContainer">
              <img src={data.snippet.thumbnails.medium.url} alt={data.snippet.title} />
            </div>
            <div className="videoTextContainer">
              <h4>{data.snippet.title}</h4>
              <div className="videoInfo">
                <div className="channelName">{data.snippet.channelTitle}</div>
                <div className="metaTag">
                  <span>{data.statistics.likeCount} views</span>
                  <span className="dot_separator"> • </span>
                  <span>{data.snippet.publishedAt}</span>
                </div>
              </div>
            </div>
            <div className="dotContainer">
              <FiMoreVertical />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
