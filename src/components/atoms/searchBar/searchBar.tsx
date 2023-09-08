import { IconWrapper, Input, SearchBarContainer } from "./searchBar.style";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  input: string;
  handleSearch: (input: string) => void;
}
const SearchBar = ({ input, handleSearch }: SearchBarProps) => {
  return (
    <SearchBarContainer active={input ? "true" : "false"}>
      <Input
        placeholder="Search"
        value={input}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <IconWrapper>
        <FaSearch size={20} color="#fffff" />
      </IconWrapper>
    </SearchBarContainer>
  );
};

export default SearchBar;
