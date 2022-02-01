import { useContext } from 'react';
import { TracksContext } from '../context/TracksContext';
import { TracksProps } from '../customHooks/useTracks';

const AlbumImage = () => {
  const { track } = useContext<TracksProps>(TracksContext)

  return <img className="album-img" src={track!.imgUrl} alt={track!.album} />;
}

export default AlbumImage;
