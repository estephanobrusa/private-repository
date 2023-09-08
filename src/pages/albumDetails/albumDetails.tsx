import {
  AlbumBoxContainer,
  AlbumBoxImage,
  AlbumDetailsContainer,
  AlbumTitle,
  BackButton,
  Text,
  TopTable,
  Track,
  Tracks,
} from "./albumDetails.style";
import GetAlbum from "../../hooks/useGetAlbum";
import { useNavigate, useParams } from "react-router";
import { msToMinutesAndSeconds } from "../../utils";
import Loading from "../../components/atoms/loading";
import { useEffect } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { colors } from "../../const/colors";

const AlbumDetails = () => {
  const navigation = useNavigate();
  const { id } = useParams();

  const { album } = GetAlbum(id);

  useEffect(() => {
    if (!album) return;
    document.title = `Spotify ${album?.name}`;

    return () => {
      document.title = "Spotfiy";
    };
  }, [album]);

  if (!album) return <Loading />;

  return (
    <>
      {album && (
        <AlbumDetailsContainer>
          <BackButton onClick={() => navigation(-1)}>
            {" "}
            <HiOutlineArrowLeft size={20} color={colors.thrid} />
          </BackButton>
          <AlbumBoxContainer>
            <AlbumBoxImage src={album.image}></AlbumBoxImage>
            <AlbumTitle>{album.name}</AlbumTitle>
          </AlbumBoxContainer>

          <TopTable>
            <Text>#</Text>
            <Text>Song</Text>
            <Text className="right">Duration</Text>
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
