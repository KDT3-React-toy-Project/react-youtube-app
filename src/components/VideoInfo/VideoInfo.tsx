import React from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { CgPlayListAdd } from 'react-icons/cg';
import { RiFlagLine } from 'react-icons/ri';

const VideoInfo = ({ videoId, videoData }) => {
  return (
    <div>
      <div>
        <ul>
          {videoData.snippet.tags.slice(0, 5).map((tag: string, index: number) => (
            <li key={index}>#{tag}</li>
          ))}
        </ul>
        <h2>{videoData.snippet.localized.title}</h2>
        <p>
          <span>{videoData.statistics.viewCount} views</span> • <span>{videoData.snippet.publishedAt}</span>
        </p>
      </div>
      <div>
        {/* 버튼들 */}
        <button>
          <BiLike />
          <span>{videoData.statistics.likeCount}</span>
        </button>
        <button>
          <BiDislike />
          <span></span>
        </button>
        <button>
          <RiShareForwardLine />
          <span>SHARE</span>
        </button>
        <button>
          <CgPlayListAdd />
          <span>SAVE</span>
        </button>
        <button>
          <RiFlagLine />
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
