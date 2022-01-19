export const mapSpotifyResponse = (data: any) => {
  return {
    id: data.id,
    trackName: data.name,
    artist: data.artists[0].name,
    album: data.album.name,
    imgUrl: data.album.images[0].url,
    preview_url: data.preview_url,
    duration_ms:data.duration_ms,
  }
}