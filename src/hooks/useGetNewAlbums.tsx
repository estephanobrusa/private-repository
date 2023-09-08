import { useEffect, useState } from "react";
import instance from "../axios";
import { Album, DataResponse } from "../interfaces/albums";
import { useNavigate } from "react-router";

export interface NewAlbums {
  id: string;
  name: string;
  image: string;
}
interface GetNewAlbumsProps {
  filterActive?: boolean;
  ref: React.RefObject<HTMLDivElement>;
}
const useGetNewAlbums = ({ filterActive, ref }: GetNewAlbumsProps) => {
  const navigate = useNavigate();
  const [newAlbums, setNewAlbums] = useState<NewAlbums[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !filterActive && hasNext) {
          fetchNewAlbums();
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
  }, [ref, currentPage, filterActive, hasNext]);

  const fetchNewAlbums = async () => {
    try {
      setIsLoading(true);
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
      navigate("/error");
    } finally {
      setCurrentPage(currentPage + 1);
      setIsLoading(false);
    }
  };

  return {
    newAlbums,
    isLoading,
    isError,
  };
};

export default useGetNewAlbums;
