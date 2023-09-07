import { NewAlbums } from "../../../../hooks/useGetNewAlbums";
import AlbumBox from "../../albumBox";
import Loading from "../../loading";
import { AlbumContainerContainer, Title } from "./albumContainer.style";

interface AlbumContainerProps {
  title?: string;
  albums: NewAlbums[];
  handleClick: (id: string) => void;
  isLoading: boolean;
}
const AlbumContainer = ({
  title,
  albums,
  handleClick,
  isLoading,
}: AlbumContainerProps) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      <AlbumContainerContainer>
        {albums?.map((item, index) => (
          <div key={index}>
            <AlbumBox albums={item} handleClick={handleClick} />
          </div>
        ))}
      </AlbumContainerContainer>
      {isLoading && <Loading />}
    </>
  );
};

export default AlbumContainer;
