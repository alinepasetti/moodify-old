import AlbumName from "./AlbumName";
import AlbumImage from "./AlbumImage";
import TrackDetail from "./TrackDetail";
import TrackPlayer from "./TrackPlayer";
import useSetTrack from "../customHooks/useSetTrack";


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
  const { isLoading, track } = useSetTrack();

  if (!track || isLoading) return <div>Loading...</div>;

  return (
    <div className="track_card">
      <AlbumName album={track?.album} />
      <AlbumImage imgUrl={track?.imgUrl} album={track?.album} />
      <TrackDetail trackName={track?.trackName} artist={track?.artist} />
      <TrackPlayer
        preview_url={track?.preview_url}
        duration_ms={track?.duration_ms}
      />
    </div>
  );
};

export default TrackCard;
