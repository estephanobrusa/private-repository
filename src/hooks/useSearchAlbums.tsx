import { useEffect, useState } from "react";
import instance from "../axios";
import { Album, DataResponse } from "../interfaces/albums";
import { NewAlbums } from "./useGetNewAlbums";
import { useNavigate } from "react-router";

interface SearchAlbumsProps {
  input: string;
  filterActive?: boolean;
  ref: React.RefObject<HTMLDivElement>;
}
const useSearchAlbums = ({ input, filterActive, ref }: SearchAlbumsProps) => {
  const navigate = useNavigate();
  const [albums, setAlbums] = useState<NewAlbums[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          filterActive &&
          input !== "" &&
          hasNext
        ) {
          fetchAlbums();
        }
      },
      { threshold: 1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, currentPage, filterActive, input, hasNext]);

  const fetchAlbums = async () => {
    try {
      setIsLoading(true);
      const response = await instance.get<DataResponse>(
        `https://api.spotify.com/v1/search?q=${input}type=album&limit=10&offset=${
          (currentPage - 1) * 10
        }&market=ES&type=album`
      );
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
      setCurrentPage(currentPage + 1);
    }
  };

  return {
    albums,
    isLoading,
    isError,
  };
};

export default useSearchAlbums;
