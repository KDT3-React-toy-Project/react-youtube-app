import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

  /* useQuery 사용 */
  // const { isLoading, data: videoData, error } = useQuery([videoId], () => getVideoDetail(videoId));
  // console.log(videoData);

  // 예시
  // channelId : "UCPydsWBQpnXGICE-XWGNdow"
  // videoId : "b1QpN8cJQCo"
  // useEffect(() => {
  //   getChannelInfo('UCPydsWBQpnXGICE-XWGNdow').then((data) => {
  //     console.log(data);
  //     localStorage.setItem('ChannelInfo', JSON.stringify(data));
  //   });
  // });

  const videoData = JSON.parse(localStorage.getItem('VideoDetail')).data.items[0];
  // console.log(videoData);
  const commentCount = videoData.statistics.commentCount;

  const channelInfo = JSON.parse(localStorage.getItem('ChannelInfo')).data.items[0];
  console.log(channelInfo);

  const commentData = JSON.parse(localStorage.getItem('Comment')).data.items;
  // console.log(commentData);

  const relationVideos = JSON.parse(localStorage.getItem('RelationVideo')).data.items;
  // console.log(relationVideos);

  return (
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
  );
}
