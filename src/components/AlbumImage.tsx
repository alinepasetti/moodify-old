import React from 'react';
import { Track } from './TrackCard';

const AlbumImage = ({ imgUrl, album }: Pick<Track, 'imgUrl' | 'album'>) => {
  return <img src={imgUrl} alt={album} />;
}

export default AlbumImage;
