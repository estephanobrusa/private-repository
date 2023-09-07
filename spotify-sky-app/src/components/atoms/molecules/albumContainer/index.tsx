import { NewAlbums } from "../../../../hooks/useGetNewAlbums";
import AlbumBox from "../../albumBox";
import { AlbumContainerContainer, Title } from "./albumContainer.style";

interface AlbumContainerProps {
  title?: string;
  albums: NewAlbums[];
  handleClick: (id: string) => void;
  isLoading: boolean;
  isError?: boolean;
}
const AlbumContainer = ({
  title,
  albums,
  handleClick,
  isLoading,
  isError,
}: AlbumContainerProps) => {
  if (isError) return <div>error</div>;
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
      {isLoading && <div>is loading</div>}
    </>
  );
};

export default AlbumContainer;
