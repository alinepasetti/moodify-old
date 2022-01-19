import React from 'react';
import { Track } from './TrackCard';

const TrackDetail = ({ trackName, artist }: Pick<Track, 'trackName' | 'artist'>) => {
  return <div>{trackName} {artist}</div>;
}

export default TrackDetail;