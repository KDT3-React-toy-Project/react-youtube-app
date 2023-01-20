import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { ShowContext } from './contexts/store';

function App() {
  const [shownav, setShownav] = useContext(ShowContext);

  return (
    <>
      <Header setShownav={setShownav} shownav={shownav} />
      <section
        style={{
          display: 'flex',
        }}
      >
        <div className="contents">
          <Sidebar setShownav={setShownav} shownav={shownav} />
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default App;
