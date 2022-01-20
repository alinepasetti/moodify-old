import React from 'react';
import { Track } from './TrackCard';

const TrackDetail = ({ trackName, artist }: Pick<Track, 'trackName' | 'artist'>) => {
  return <div className='track-detail'>
    <p className='track-name'>{trackName}</p>
    <p className='artist-name'>{artist}</p>
    </div>;
}

export default TrackDetail;