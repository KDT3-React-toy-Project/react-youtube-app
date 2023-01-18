import React from 'react';

const ChannelInfo = ({ videoId, channelInfo }) => {
  return (
    <div>
      <div>
        <div>
          {/* 채널 프사 */}
          <img
            src="https://yt3.ggpht.com/EjqONiq-nKhXEhz_4FGQWeKAHHXHTWVjIxRYou8_PziBFNW7Fq5-NN-dMIHbG3_MFNbjYs76pg=s88-c-k-c0x00ffffff-no-rj"
            alt="avatar"
          />
        </div>
        <div>
          <a href="/">{channelInfo.snippet.localized.title}</a>
          <span>{channelInfo.statistics.subscriberCount} subscribers</span>
        </div>
        <div>
          <button>SUBSCRIBED</button>
        </div>
      </div>
      <div>{channelInfo.snippet.localized.description}</div>
    </div>
  );
};

export default ChannelInfo;
