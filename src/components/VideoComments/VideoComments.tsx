import React from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';

const VideoComments = ({ videoId, commentData, commentCount }) => {
  return (
    <ul>
      <p>{commentCount} Comments</p>

      {commentData.map((comment) => (
        <li>
          <div>
            <div>
              {/* 반복 */}
              <div>
                <div>
                  {/* 채널 프사 */}
                  <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user profile" />
                </div>
                <div>
                  <div>
                    {comment.snippet.topLevelComment.snippet.authorDisplayName}
                    <span>{comment.snippet.topLevelComment.snippet.publishedAt} a day ago</span>
                  </div>
                  <div>{comment.snippet.topLevelComment.snippet.textDisplay}</div>
                  <div>
                    <div>
                      <BiLike />
                      <span>{comment.snippet.topLevelComment.snippet.likeCount}</span>
                    </div>
                    <div>
                      <BiDislike />
                    </div>
                    <span>REPLY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default VideoComments;
