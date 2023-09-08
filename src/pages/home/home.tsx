import { useRef, useState } from "react";
import AlbumContainer from "../../components/atoms/molecules/albumContainer";
import SearchBar from "../../components/atoms/searchBar/searchBar";
import { DashBoardContainer } from "./home.style";
import { useNavigate } from "react-router";
import useDebounce from "../../hooks/useDebounce";
import useGetNewAlbums from "../../hooks/useGetNewAlbums";
import useSearchAlbums from "../../hooks/useSearchAlbums";

const Home = () => {
  const navigate = useNavigate();
  const [filterActive, setFilterActive] = useState(false);
  const [input, setInput] = useState("");
  const debouncedSearchTerm = useDebounce({ value: input, delay: 500 });
  const observerTarget = useRef<HTMLDivElement>(null);
  const { newAlbums, isLoading } = useGetNewAlbums({
    filterActive,
    ref: observerTarget,
  });
  const { albums, isLoading: isLoadingSearch } = useSearchAlbums({
    input: debouncedSearchTerm,
    filterActive,
    ref: observerTarget,
  });

  const handleSearch = (input: string) => {
    setFilterActive(input === "" ? false : true);
    setInput(input);
  };

  const handleClick = (id: string) => {
    navigate(`album/${id}`);
  };

  return (
    <>
      <DashBoardContainer>
        <SearchBar handleSearch={handleSearch} input={input} />
        {!filterActive ? (
          <AlbumContainer
            title="New Release"
            albums={newAlbums}
            handleClick={handleClick}
            isLoading={isLoading}
          />
        ) : (
          <AlbumContainer
            albums={albums}
            handleClick={handleClick}
            isLoading={isLoadingSearch}
          />
        )}
        <div ref={observerTarget}></div>
      </DashBoardContainer>
    </>
  );
};

export default Home;
