import { useEffect, useRef, useState } from "react";
import instance from "../axios";
import { Album, DataResponse } from "../interfaces/albums";
import { NewAlbums } from "./useGetNewAlbums";
import { useNavigate } from "react-router";

interface SearchAlbumsProps {
  input: string;
  filterActive?: boolean;
}
const SearchAlbums = ({ input, filterActive }: SearchAlbumsProps) => {
  const navigate = useNavigate();
  const [albums, setAlbums] = useState<NewAlbums[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  const lastQuery = useRef("");

  useEffect(() => {
    if (input === "") return;
    if (!hasNext) return;
    if (lastQuery.current !== input) {
      setAlbums([]);
      setCurrentPage(1);
      setHasNext(true);
      setIsError(false);
      setIsLoading(false);
    }
    fetchAlbums();
  }, [input, currentPage]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (filterActive) window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage, filterActive]);

  const fetchAlbums = async () => {
    try {
      setIsLoading(true);
      const response = await instance.get<DataResponse>(
        `https://api.spotify.com/v1/search?q=${input}type=album&limit=10&offset=${
          (currentPage - 1) * 10
        }&market=ES&type=album`
      );
      lastQuery.current = input;
      setHasNext(!!response.data.albums.next);
      const newAlbums = response.data.albums.items.map((album: Album) => {
        return {
          id: album.id,
          name: album.name,
          image: album.images[0].url,
        };
      });
      setAlbums((prev) => [...prev, ...newAlbums]);
    } catch (error) {
      setIsError(true);
      navigate("/error");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    albums,
    isLoading,
    isError,
  };
};

export default SearchAlbums;
