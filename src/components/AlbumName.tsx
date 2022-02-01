import React, { useContext } from 'react';
import { TracksContext } from '../context/TracksContext';
import { TracksProps } from '../customHooks/useTracks';

const AlbumName = () => {
  const { track } = useContext<TracksProps>(TracksContext)
  return <p className='album-name'>{track!.album}</p>;
}

export default AlbumName;
