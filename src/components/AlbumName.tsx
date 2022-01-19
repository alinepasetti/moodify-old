import React from 'react';
import { Track } from './TrackCard';

const AlbumName = ({ album }: Pick<Track, 'album'>) => {
  return <div>{album}</div>;
}

export default AlbumName;
