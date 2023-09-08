import { useEffect, useState } from "react";
import instance from "../axios";
import { Album } from "../interfaces/album";

export interface ArtistAlbum {
  id: string;
  name: string;
  image: string;
  tracks: TrackItem[];
}
export interface TrackItem {
  id: string;
  name: string;
  duration: number;
}
const useGetAlbum = (albumId?: string) => {
  const [album, setAlbum] = useState<ArtistAlbum>();

  useEffect(() => {
    if (albumId) fetchAlbums();
  }, [albumId]);

  const fetchAlbums = async () => {
    try {
      const response = await instance.get<Album>(
        `https://api.spotify.com/v1/albums/${albumId}?market=ES`
      );
      const albums = {
        id: response.data.id,
        name: response.data.name,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map((item) => {
          return {
            id: item.id,
            name: item.name,
            duration: item.duration_ms,
          };
        }),
      };
      setAlbum(albums);
    } catch (error) {
      console.error("Error fetching new albums:", error);
    }
  };

  return {
    album,
  };
};

export default useGetAlbum;
