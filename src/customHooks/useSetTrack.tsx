import data from "../trackDataMock.json";
import { useEffect, useState } from "react";
import { mapSpotifyResponse } from "../services/utils";
import { Track } from "../components/TrackCard";


const useSetTrack = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [track, setTrack] = useState<Track | null>(null);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    async function asyncDelay() {
      await delay(2000);
      console.log("ddd");
      setIsLoading(false);
      setTrack(mapSpotifyResponse(data));
    }
    asyncDelay();
  }, []);

  return { isLoading, track };
};

export default useSetTrack;
