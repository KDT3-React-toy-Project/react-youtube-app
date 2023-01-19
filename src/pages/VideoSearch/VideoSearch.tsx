import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSearchData } from 'src/api/requests';
// import { ShowContext } from 'src/contexts/store';

function VideoSearch() {
  // const [shownav] = useContext(ShowContext);
  const [data, setData] = useState<any>([]);
  // const ytDurationFormat = require('youtube-duration-format');
  const { keyword } = useParams();

  useEffect(() => {
    const getData = async () => {
      const res = await getSearchData(keyword);
      setData(res.data.items);
      console.log(res.data);
    };
    getData();
  }, [keyword]);

  console.log(data);
  return (
    <div className="search-wrap">
      {data.map((item: any, index: number) => {
        return (
          <div key={index}>
            <div>
              <img src={item.snippet.thumbnails.high.url} alt={item.snippet.title} />
              <p>영상 길이</p>
            </div>
            <div>
              <p>{item.snippet.title}</p>
              <p>날짜, 조회수</p>
              <p>
                <span></span>
                <span>{item.snippet.channelTitle}</span>
              </p>
              <p>{item.snippet.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VideoSearch;
