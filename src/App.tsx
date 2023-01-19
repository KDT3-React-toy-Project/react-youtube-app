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
      <Header setDisplay={setDisplay} />
      <div className="contents">
        <Nav display={display} />
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
