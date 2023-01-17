import React, { useEffect } from 'react';
import axios from '../api/axios';
import { getSearchData, getVideoDetail, getChannelInfo, getComment, getRelationVideo } from './../api/requests';

export default function Header() {
  useEffect(() => {
    // getRelationVideo('b1QpN8cJQCo').then((data) => console.log(data));
  });

  return <div>Header</div>;
}

// channelId : "UCPydsWBQpnXGICE-XWGNdow"
// videoId : "b1QpN8cJQCo"
