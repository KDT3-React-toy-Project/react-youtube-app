import { useContext } from 'react';
import VideoCard from 'src/components/VideoCard/VideoCard';
import { ShowContext } from 'src/contexts/store';
import './Videos.scss';
const Videos = () => {
  const [shownav] = useContext(ShowContext);

  return (
    <div className="GalleryContainer">
      <ul className="mainGallery" nav-check={shownav ? 'show' : 'none'}>
        <VideoCard />
      </ul>
    </div>
  );
};

export default Videos;
