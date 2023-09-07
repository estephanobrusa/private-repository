import {
  AlbumBoxContainer,
  AlbumBoxImage,
  AlbumDetailsContainer,
  AlbumTitle,
  Text,
  TopTable,
  Track,
  Tracks,
} from "./albumDetails.style";
import GetAlbum from "../../hooks/useGetAlbum";
import { useParams } from "react-router";
import { msToMinutesAndSeconds } from "../../utils";
import Loading from "../../components/atoms/loading";

const AlbumDetails = () => {
  const { id } = useParams();

  const { album } = GetAlbum(id);

  if (!album) return <Loading />;

  return (
    <>
      {album && (
        <AlbumDetailsContainer>
          <AlbumBoxContainer>
            <AlbumBoxImage src={album.image}></AlbumBoxImage>
            <AlbumTitle>{album.name}</AlbumTitle>
          </AlbumBoxContainer>

          <TopTable>
            <Text>#</Text>
            <Text>Song</Text>
            <Text className="right">Durantion</Text>
          </TopTable>
          <Tracks>
            {album?.tracks?.map((item, index) => {
              return (
                <Track key={item.id}>
                  <Text>{index + 1}</Text>
                  <Text>{item.name}</Text>
                  <Text>{msToMinutesAndSeconds(item.duration)}</Text>
                </Track>
              );
            })}
          </Tracks>
        </AlbumDetailsContainer>
      )}
    </>
  );
};

export default AlbumDetails;
