import { useState } from "react";
import AlbumContainer from "../../components/atoms/molecules/albumContainer";
import SearchBar from "../../components/atoms/searchBar/searchBar";
import GetAlbums from "../../hooks/useGetNewAlbums";
import { DashBoardContainer } from "./home.style";
import SearchAlbums from "../../hooks/useSearchAlbums";
import { useNavigate } from "react-router";
import useDebounce from "../../hooks/useDebounce";

const Home = () => {
  const navigate = useNavigate();
  const [filterActive, setFilterActive] = useState(false);
  const [input, setInput] = useState("");
  const debouncedSearchTerm = useDebounce({ value: input, delay: 1000 });
  const { newAlbums, isLoading } = GetAlbums(filterActive);
  const { albums, isLoading: isLoadingSearch } = SearchAlbums({
    input: debouncedSearchTerm,
    filterActive,
  });

  const handleSearch = (input: string) => {
    setFilterActive(input === "" ? false : true);
    setInput(input);
  };

  const handleClick = (id: string) => {
    navigate(`album/${id}`);
  };

  return (
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
    </DashBoardContainer>
  );
};

export default Home;
