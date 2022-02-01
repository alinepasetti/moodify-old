import { useContext } from 'react';
import { TracksContext } from '../context/TracksContext';
import { TracksProps } from '../customHooks/useTracks';

const TrackPlayer = () => {
  const { track } = useContext<TracksProps>(TracksContext)
  if (!track!.preview_url) return <h1>No track preview available</h1>
  return (<div>
      {track!.duration_ms}

      <audio controls>
        <source src={track!.preview_url} type='audio/mpeg' />
      </audio>
    </div>);
}

export default TrackPlayer;