import { useContext } from "react";
import { TracksContext } from "../context/TracksContext";
import { TracksProps } from "../customHooks/useTracks";

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
  const {
    currentTime,
    audioPlayer,
    duration,
    calculateTime,
    progressBar,
    changeRange,
    isPlaying,
    setIsPlaying,
  } = useCurrentTime();

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
        src={"https://actions.google.com/sounds/v1/water/small_stream_flowing.ogg"}
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
      <div className="currentTime">{calculateTime(currentTime)}</div>
      <div>
        <input
          type="range"
          className="progressBar"
          defaultValue="0"
          ref={progressBar}
          onChange={() => changeRange(currentTime)}
        ></input>
      </div>
      <div className="duration">
        {duration && !isNaN(duration) && calculateTime(duration)}
      </div>
    </div>
  );
};

export default TrackPlayer;
