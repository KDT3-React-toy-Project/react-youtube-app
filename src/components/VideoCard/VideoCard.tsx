import React, { useEffect, useState } from 'react';
import './VideoCard.scss';
import { FiMoreVertical } from 'react-icons/fi';
import { format, render, cancel, register } from 'timeago.js';
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

  // // format timestamp
  // format(1544666010224);
  // // format date instance
  // format(new Date(1544666010224));
  // // format date string
  // format('2018-12-12');
  // // format with locale
  // format(1544666010224, 'zh_CN');
  // // format with locale and relative date
  // format(1544666010224, 'zh_CN', '2018-11-11');
  // // e.g.
  // format(Date.now() - 11 * 1000 * 60 * 60); // returns '11 hours ago'

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
              <img src="https://cdn.pixabay.com/photo/2016/07/03/18/36/youtube-1495277_960_720.png" alt="" />
            </div>
            <div className="videoTextContainer">
              <h4>{data.snippet.title}</h4>
              <div className="videoInfo">
                <div className="channelName">{data.snippet.channelTitle}</div>
                <div className="metaTag">
                  <span>{data.statistics.likeCount} views</span>
                  <span className="dot_separator"> • </span>
                  <span>{}</span>
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
