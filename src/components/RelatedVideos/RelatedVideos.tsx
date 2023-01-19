import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RelatedVideos.scss';

const RelatedVideos = ({ videoId, relationVideos }) => {
  // console.log(relationVideos);
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/videos/watch/${id}`);
  };

  return (
    <ul className="relatedVideos">
      {relationVideos.map((video) => (
        <li key={video.id.videoId} onClick={() => handleClick(video.id.videoId)}>
          {/* link 연결 추가 */}
          <div className="videoWrap">
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
                  <span>{video.snippet.channelTitle}</span>
                </Link>
                <div className="etc">
                  <span>조회수 없음</span>&nbsp;<span> • </span>&nbsp;<span>{video.snippet.publishedAt}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RelatedVideos;
