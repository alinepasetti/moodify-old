import { useEffect, useRef, useState } from "react";
import { Track } from "../components/TrackCard";

export type TracksProps = { track: Track | null; isLoading: boolean };

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const audioPlayer = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const seconds = Math.floor(0);
    setCurrentTime(0);
  }, [audioPlayer.current?.onloadedmetadata, audioPlayer.current?.readyState]);

  const calculateTime = (secs: number): string => {
    const minutes = Math.floor(secs / 60000);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor((secs % 60000) / 1000).toFixed(0);
    const returnedSeconds = Number(seconds) < 10 ? `0${seconds}` : seconds;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  return { currentTime, setCurrentTime, audioPlayer, calculateTime };
};

export default useCurrentTime;
