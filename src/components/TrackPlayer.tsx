import { useContext } from "react";
import { TracksContext } from "../context/TracksContext";
import useTracks, { TracksProps } from "../customHooks/useTracks";

import "../styles/audioPlayer.css";
import {
  BsArrowRightShort,
  BsArrowLeftShort,
  BsFillPlayFill,
  BsFillPauseFill,
} from "react-icons/bs";
import useCurrentTime from "../customHooks/useCurrentTime";

const TrackPlayer = () => {
  const { track } = useContext<TracksProps>(TracksContext);
  const { isPlaying, setIsPlaying } = useTracks();
  const { currentTime, setCurrentTime, audioPlayer, calculateTime } =
    useCurrentTime();

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current!.play();
    } else {
      audioPlayer.current!.pause();
    }
  };
  if (!track!.preview_url) return <h1>No track preview available</h1>;
  return (
    <div className="audioPlayer">
      <audio
        ref={audioPlayer}
        src={track!.preview_url}
        preload="metadata"
      ></audio>
      <button className="forwardBackward">
        <BsArrowLeftShort />
      </button>
      <button className="playPause" onClick={togglePlayPause}>
        {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill className="play" />}
      </button>
      <button className="forwardBackward">
        <BsArrowRightShort />
      </button>
      <div className="currentTime">{currentTime}</div>
      <div>
        <input type="range" className="progressBar"></input>
      </div>
      <div className="duration">{(track!.duration_ms && !isNaN(track!.duration_ms)) && calculateTime(track!.duration_ms)}</div>
    </div>
  );
};

export default TrackPlayer;
