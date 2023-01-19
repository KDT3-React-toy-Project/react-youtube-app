import React from 'react';
import { Link } from 'react-router-dom';
import './RelatedVideos.scss';

const RelatedVideos = ({ videoId, relationVideos }) => {
  console.log(relationVideos);

  return (
    <ul className="relatedVideos">
      {relationVideos.map((video) => (
        <li key={video.id.videoId}>
          <Link to={`/videos/watch/${video.id.videoId}`} className="videoWrap">
            <div className="thumbnail">
              <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
              <div className="duration">
                <span>영상시간</span>
              </div>
            </div>

            {/* 텍스트 부분 */}
            <div className="txts">
              <h3 className="title">{video.snippet.title}</h3>
              <div className="etcs">
                <Link to={`/channel/${video.snippet.channelId}`}>
                  <div>{video.snippet.channelTitle}</div>
                </Link>
                <div className="etc">
                  <span>조회수 없음</span>&nbsp;<span> • </span>&nbsp;<span>{video.snippet.publishedAt}</span>
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RelatedVideos;
