import { useEffect, useState } from "react";
import instance from "../axios";
import { Album, DataResponse } from "../interfaces/albums";

export interface NewAlbums {
  id: string;
  name: string;
  image: string;
}

const GetAlbums = (filterActive: boolean) => {
  const [newAlbums, setNewAlbums] = useState<NewAlbums[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (!filterActive) setCurrentPage(1);
  }, [filterActive]);

  useEffect(() => {
    if (!hasNext || filterActive) return;
    fetchNewAlbums();
  }, [currentPage, filterActive]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

  const fetchNewAlbums = async () => {
    try {
      const response = await instance.get<DataResponse>(
        `/browse/new-releases?limit=10&offset=${(currentPage - 1) * 10}`
      );
      setHasNext(!!response.data.albums.next);
      const newAlbums = response.data.albums.items.map((album: Album) => {
        return {
          id: album.id,
          name: album.name,
          image: album.images[0].url,
        };
      });
      setNewAlbums((prev) => [...prev, ...newAlbums]);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    newAlbums,
    isLoading,
    isError,
  };
};

export default GetAlbums;
