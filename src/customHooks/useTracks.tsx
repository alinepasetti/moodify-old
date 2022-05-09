import data from "../trackDataMock.json";
import { useEffect, useState } from "react";
import { mapSpotifyResponse } from "../services/utils";
import { Track } from "../components/TrackCard";

export type TracksProps = { track: Track | null; isLoading: boolean };

const useTracks = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [track, setTrack] = useState<Track | null>(null);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    async function asyncDelay() {
      await delay(2000);
      setTrack(mapSpotifyResponse(data));
      setIsLoading(false);
    }
    asyncDelay();
  }, []);

  return { isLoading, track };
};

export default useTracks;
