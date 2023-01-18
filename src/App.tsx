import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'

function App() {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <>
      <Header setDisplay={setDisplay}/>
      <div className="contents">
        <Nav display={display}/>
        <Outlet />
      </div>
    </>
  );
}

export default App;
