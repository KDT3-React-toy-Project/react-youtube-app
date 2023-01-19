import React from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { CgPlayListAdd } from 'react-icons/cg';
import { RiFlagLine } from 'react-icons/ri';
import './VideoInfo.scss';

const VideoInfo = ({ videoId, videoData }) => {
  return (
    <div className="videoInfo">
      <div className="infoTxts">
        <ul className="tags">
          {videoData.snippet.tags.slice(0, 5).map((tag: string, index: number) => (
            <li key={index}>#{tag}</li>
          ))}
        </ul>
        <h2 className="title">{videoData.snippet.localized.title}</h2>
        <p className="etc">
          <span>{Number(videoData.statistics.viewCount).toString()} views</span> •{' '}
          <span>{videoData.snippet.publishedAt}</span>
        </p>
      </div>
      <div className="infoBtns">
        {/* 버튼들 */}
        <button>
          <BiLike size={25} />
          <span>{videoData.statistics.likeCount}</span>
        </button>
        <button>
          <BiDislike size={25} />
        </button>
        <button>
          <RiShareForwardLine size={25} />
          <span>SHARE</span>
        </button>
        <button>
          <CgPlayListAdd size={25} />
          <span>SAVE</span>
        </button>
        <button>
          <RiFlagLine size={25} />
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
