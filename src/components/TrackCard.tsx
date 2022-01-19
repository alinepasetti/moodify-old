import { useEffect, useState } from "react";
import data from "../trackDataMock.json";
import AlbumName from "./AlbumName";
import AlbumImage from "./AlbumImage";
import TrackDetail from "./TrackDetail";
import TrackPlayer from "./TrackPlayer";
import TrackControl from "./TrackControl";
import { mapSpotifyResponse } from "../utils";

export type Track = {
  id: string; // id
  trackName: string; // name
  artist: string; // artists[0].name
  album: string; // album.name
  imgUrl: string; // album.images[0].url
  preview_url: string | null; // A link to a 30 second preview (MP3 format) of the track. Can be null
  duration_ms: number; // duration_ms
};

const TrackCard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [track, setTrack] = useState<Track | null>(null);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const asyncDelay = async () => {
      await delay(2000);
    };
    asyncDelay();
    setIsLoading(false);
    setTrack(mapSpotifyResponse(data));
  }, []);

  if (!track || isLoading) return <div>Loading...</div>;

  return (
    <div>
      <AlbumName album={track?.album} />
      <AlbumImage imgUrl={track?.imgUrl} album={track?.album} />
      <TrackDetail trackName={track?.trackName} artist={track?.artist} />
      <TrackPlayer
        preview_url={track?.preview_url}
        duration_ms={track?.duration_ms}
      />
      <TrackControl />
    </div>
  );
};

export default TrackCard;
