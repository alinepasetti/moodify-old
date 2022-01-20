import React from 'react';
import { Track } from './TrackCard';

const AlbumName = ({ album }: Pick<Track, 'album'>) => {
  return <p className='album-name'>{album}</p>;
}

export default AlbumName;
