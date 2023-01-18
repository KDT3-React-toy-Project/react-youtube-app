import React, { useEffect } from 'react';
import { getVideoDetail } from 'src/api/requests';

export default function Header() {
  // 예시
  // channelId : "UCPydsWBQpnXGICE-XWGNdow"
  // videoId : "b1QpN8cJQCo"
  // useEffect(() => {
  //   getVideoDetail('b1QpN8cJQCo').then((data) => console.log(data));
  // }, []);

  return <div>Header</div>;
}
