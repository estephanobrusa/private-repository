import { NewAlbums } from "../../../hooks/useGetNewAlbums";
import { AlbumBoxContainer, AlbumBoxImage, AlbumTitle } from "./albumBox.style";

interface AlbumBoxProps {
  albums: NewAlbums;
  handleClick: (id: string) => void;
}
const AlbumBox = ({ albums, handleClick }: AlbumBoxProps) => {
  return (
    <AlbumBoxContainer onClick={() => handleClick(albums.id)}>
      <AlbumBoxImage src={albums.image}></AlbumBoxImage>
      <AlbumTitle>{albums.name}</AlbumTitle>
    </AlbumBoxContainer>
  );
};

export default AlbumBox;
