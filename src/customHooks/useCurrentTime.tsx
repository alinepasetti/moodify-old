import { useEffect, useRef, useState } from "react";
import { Track } from "../components/TrackCard";

export type TracksProps = { track: Track | null; isLoading: boolean };

const useCurrentTime = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const audioPlayer = useRef<HTMLAudioElement>(null);
  const progressBar = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current!.duration);
    setDuration(seconds);
    progressBar.current!.max = seconds.toString();
  }, [
    audioPlayer?.current?.onloadedmetadata,
    audioPlayer?.current?.readyState,
  ]);

  const calculateTime = (secs: number): string => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(secs % 60).toFixed(0);
    const returnedSeconds = Number(seconds) < 10 ? `0${seconds}` : seconds;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const changeRange = (duration: number) => {
    audioPlayer.current!.currentTime = Number(progressBar.current!.value);
    const range = `${(Number(progressBar.current!.value) / duration) * 100}%`;
    progressBar.current?.style.setProperty("--seek-before-width", range);
    setCurrentTime(Number(progressBar.current!.value));
  };

  return {
    currentTime,
    setCurrentTime,
    duration,
    audioPlayer,
    calculateTime,
    progressBar,
    changeRange,
    isPlaying,
    setIsPlaying,
  };
};

export default useCurrentTime;
