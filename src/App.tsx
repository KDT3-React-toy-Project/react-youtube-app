import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const [display, setDisplay] = useState<boolean>(false);

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header setDisplay={setDisplay} />
        <div className="contents">
          <Nav display={display} />
          <Outlet />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
