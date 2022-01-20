import React from 'react';
import { Track } from './TrackCard';

const TrackPlayer = ({ preview_url, duration_ms }: Pick<Track, 'preview_url' | 'duration_ms'>) => {
  if (!preview_url) return <h1>No track preview available</h1>
  return (<div>
      {duration_ms}

      <audio controls>
        <source src={preview_url} type='audio/mpeg' />
      </audio>
    </div>);
}

export default TrackPlayer;