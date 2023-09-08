import { NewAlbums } from "../../../hooks/useGetNewAlbums";
import AlbumBox from "../../atoms/albumBox";
import Loading from "../../atoms/loading";
import NotResultAlbums from "../../atoms/notResultAlbums";
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
  isLoading = true,
}: AlbumContainerProps) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      <AlbumContainerContainer>
        {albums.length > 0 ? (
          albums?.map((item, index) => (
            <div key={index}>
              <AlbumBox albums={item} handleClick={handleClick} />
            </div>
          ))
        ) : (
          <>{!isLoading && <NotResultAlbums />}</>
        )}
      </AlbumContainerContainer>
      {isLoading && <Loading />}
    </>
  );
};

export default AlbumContainer;
