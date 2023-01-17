import axios from "axios";
import { useEffect } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./Feed.scss";
const Feed = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("./videos/channel.json");
    };
    getData();
  }, []);

  return (
    <div className="mainGallery">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
};

export default Feed;
