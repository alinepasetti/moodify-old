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

const TrackPlayer = () => {
  const { track } = useContext<TracksProps>(TracksContext);
  const { isPlaying, setIsPlaying } = useTracks();
  if (!track!.preview_url) return <h1>No track preview available</h1>;
  return (
    <div className="audioPlayer">
      <audio src={track!.preview_url} preload="metadata"></audio>
      <button className="forwardBackward">
        <BsArrowLeftShort />
      </button>
      <button className="playPause" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill className="play" />}
      </button>
      <button className="forwardBackward">
        <BsArrowRightShort />
      </button>
      <div>0:00</div>
      <div>
        <input type="range"></input>
      </div>
      <div>{track!.duration_ms}</div>
    </div>
  );
};

export default TrackPlayer;
