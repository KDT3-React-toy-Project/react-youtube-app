import React from 'react';
import { Link } from 'react-router-dom';

const RelatedVideos = ({ videoId, relationVideos }) => {
  return (
    <ul>
      {relationVideos.map((video) => (
        <li>
          <div>
            <Link to={`/videos/watch/${video.id.videoId}`}>
              <div>
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                <div>
                  <span>영상시간</span>
                </div>
              </div>

              {/* 텍스트 부분 */}
              <div>
                <div>
                  <h3>{video.snippet.title}</h3>
                  <div>
                    {/* 채널로 이동 */}
                    <a href="/channel/@relaxationfilm">
                      <div>{video.snippet.channelTitle}</div>
                    </a>
                    <div>
                      <span>조회수 없음 </span> &nbsp;<span> • </span>&nbsp;<span>{video.snippet.publishedAt}</span>
                    </div>
                  </div>
                </div>
                <div>상세보기(점세개) 아이콘 {/* 실제로 구현은 x */}</div>
              </div>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RelatedVideos;
