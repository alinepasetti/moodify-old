import { useContext } from 'react';
import { TracksContext } from '../context/TracksContext';
import { TracksProps } from '../customHooks/useTracks';

const TrackDetail = () => {
  const { track } = useContext<TracksProps>(TracksContext)
  return <div className='track-detail'>
    <p className='track-name'>{track!.trackName}</p>
    <p className='artist-name'>{track!.artist}</p>
    </div>;
}

export default TrackDetail;