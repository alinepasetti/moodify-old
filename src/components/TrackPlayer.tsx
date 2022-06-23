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
      <div className="progressBarContainer">
        <p className="currentTime">{calculateTime(currentTime)}</p>
          <input
            type="range"
            className="progressBar"
            defaultValue="0"
            ref={progressBar}
            onChange={() => changeRange(currentTime)}
          ></input>
        <p className="duration">
          {duration && !isNaN(duration) && calculateTime(duration)}
        </p>
      </div>
      <div className="audioControls">
        <audio
          ref={audioPlayer}
          src={
            "https://actions.google.com/sounds/v1/water/small_stream_flowing.ogg"
          }
          preload="metadata"
        ></audio>
        <button className="forwardBackward controlButton">
          <BsArrowLeftShort />
        </button>
        <button className="playPause controlButton" onClick={togglePlayPause}>
          {isPlaying ? (
            <BsFillPauseFill />
          ) : (
            <BsFillPlayFill className="play" />
          )}
        </button>
        <button className="forwardBackward controlButton skipButton">
          <BsArrowRightShort />
        </button>
      </div>
    </div>
  );
};

export default TrackPlayer;
