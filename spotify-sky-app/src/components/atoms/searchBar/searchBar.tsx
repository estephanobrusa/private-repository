import { Input, SearchBarContainer } from "./searchBar.style";

interface SearchBarProps {
  input: string;
  handleSearch: (input: string) => void;
}
const SearchBar = ({ input, handleSearch }: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <Input
        placeholder="Search"
        value={input}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
