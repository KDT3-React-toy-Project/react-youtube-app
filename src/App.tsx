import { useState, useContext, Dispatch, SetStateAction } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Nav/Sidebar';
import {ShowContext} from './contexts/store';

function App() {
  const [shownav, setShownav] = useContext(ShowContext)

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
