import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
// import { getSearchData, getVideoDetail } from 'src/api/requests';
import { ShowContext } from 'src/contexts/store';
import './VideoSearch.scss';

function VideoSearch() {
  const [shownav] = useContext(ShowContext);
  const [data, setData] = useState<any>([]);
  const { keyword } = useParams();

  useEffect(() => {
    // const getData = async () => {
    //   const res = await getSearchData(keyword);
    //   setData(res.data.items);
    //   console.log(res.data);
    // };
    // getData();
    const getSearchData = async () => {
      const res = await axios.get(`/videos/search.json`);
      setData(res.data.items);
      console.log(res);
    };
    getSearchData();
  }, [keyword]);

  return (
    <div className="search-container" nav-check={shownav ? 'show' : 'none'}>
      <div className="search-wrap">
        {data.map((item: any, index: number) => {
          return (
            <Link to={`/videos/watch/${item.id.videoId}`} key={index}>
              <div className="search-video-list">
                <div className="search-thumbnails">
                  <img src={item.snippet.thumbnails.high.url} alt={item.snippet.title} />
                  <p></p>
                </div>
                <div className="search-video-info">
                  <p className="search-video-title">{item.snippet.title}</p>
                  <p>날짜, 조회수</p>
                  <p className="search-channel-title">
                    <span>
                      <img src={''} alt="" />
                    </span>
                    <span>{item.snippet.channelTitle}</span>
                  </p>
                  <p className="search-video-description">{item.snippet.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default VideoSearch;
