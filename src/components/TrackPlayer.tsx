import React from 'react';
import { Track } from './TrackCard';

const TrackPlayer = ({ preview_url, duration_ms }: Pick<Track, 'preview_url' | 'duration_ms'>) => {
  return <div>{preview_url} {duration_ms}</div>;
}

export default TrackPlayer;