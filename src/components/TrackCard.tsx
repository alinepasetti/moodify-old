import AlbumName from "./AlbumName";
import AlbumImage from "./AlbumImage";
import TrackDetail from "./TrackDetail";
import TrackPlayer from "./TrackPlayer";
import { TracksContext } from "../context/TracksContext";
import { useContext } from "react";

export type Track = {
  id: string;
  trackName: string;
  artist: string;
  album: string;
  imgUrl: string;
  preview_url: string | null; // A link to a 30 second preview (MP3 format) of the track. Can be null
  duration_ms: number;
};

const TrackCard = () => {
  const { isLoading, track } = useContext(TracksContext);

  if (!track && isLoading) return <div>Loading...</div>;

  return (
    <div className="track_card">
      <AlbumName />
      <AlbumImage />
      <TrackDetail />
      <TrackPlayer />
    </div>
  );
};

export default TrackCard;
