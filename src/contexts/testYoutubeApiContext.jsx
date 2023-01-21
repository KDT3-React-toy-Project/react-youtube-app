import { createContext, useContext } from 'react';
import FakeYoutubeClient from 'src/api/testApi/fakeYoutubeClient';
import Youtube from 'src/api/testApi/youtube';

export const YoutubeApiContext = createContext();

const client = new FakeYoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
