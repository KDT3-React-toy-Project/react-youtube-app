import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Nav/Sidebar';

function App() {
  const [shownav, setShownav] = useState<boolean>(false);

  return (
    <>
      <Header setShownav={setShownav} shownav={shownav}/>
      <section style={{
        display:"flex",
      }}>
        <Sidebar setShownav={setShownav} shownav={shownav}/>
        <Outlet />
      </section>
    </>
  );
}

export default App;
