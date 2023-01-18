import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getSearchData } from './../../api/requests';

function VideoSearch() {
  const { keyword } = useParams()
  useEffect(() => {
    const getData = async () => {
      const res = await getSearchData(keyword);
      console.log(res);
    }
    getData();
  }, [keyword]);

  return (
    <div>VideoSearch</div>
  )
}

export default VideoSearch