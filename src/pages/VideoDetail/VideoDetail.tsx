import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getComment, getVideoDetail } from 'src/api/requests';
import { getRelationVideo, getChannelInfo } from './../../api/requests';
import './VideoDetail.scss';

import VideoInfo from 'src/components/VideoInfo/VideoInfo';
import ChannelInfo from 'src/components/ChannelInfo/ChannelInfo';
import VideoComments from './../../components/VideoComments/VideoComments';
import RelatedVideos from 'src/components/RelatedVideos/RelatedVideos';

export default function VideoDetail() {
  // 주소의 비디오 아이디 가져오기
  const { videoId } = useParams();
  const { state } = useLocation();
  const channelId = state.channelId;

  /* useQuery 사용 */

  const { isLoading: videoLoading, data: videoData } = useQuery(['videoData', videoId], () => getVideoDetail(videoId));
  const commentCount = videoData && videoData.statistics.commentCount;

  const { isLoading: channelLoading, data: channelInfo } = useQuery([channelId], () => getChannelInfo(channelId));

  const { isLoading: commentLoading, data: commentData } = useQuery(['commentData', videoId], () =>
    getComment(videoId),
  );

  const { isLoading: relatedLoading, data: relationVideos } = useQuery(['relationVideos', videoId], () =>
    getRelationVideo(videoId),
  );
  console.log(relationVideos);

  return (
    <>
      {videoLoading || channelLoading || commentLoading || relatedLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="videoDetail">
          <div className="wrap">
            <div className="videoDetailLeft">
              {/* 비디오 */}
              <div id="videoWrap">
                <iframe
                  title="video"
                  id="player"
                  width="100%"
                  height="100%"
                  src={`//www.youtube.com/embed/${videoId}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              {/* 비디오 정보 */}
              <VideoInfo videoId={videoId} videoData={videoData} />

              {/* 채널 정보 */}
              <ChannelInfo videoId={videoId} channelInfo={channelInfo} />

              {/* 댓글 */}
              <VideoComments videoId={videoId} commentData={commentData} commentCount={commentCount} />
            </div>

            {/* 관련 동영상 */}
            <div className="videoDetailRight">
              {/* 반복 */}
              <RelatedVideos videoId={videoId} relationVideos={relationVideos} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
