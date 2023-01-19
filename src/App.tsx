import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { ShowContext } from './contexts/store';

function App() {
  const [shownav, setShownav] = useContext(ShowContext);

  const queryClient = new QueryClient();

  return (
    <>
      <Header setShownav={setShownav} shownav={shownav} />
      <section
        style={{
          display: 'flex',
        }}
      >
        <Sidebar setShownav={setShownav} shownav={shownav} />
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </section>
    </>
  );
}

export default App;
