import { NotResultContainer, Title } from "./notResultAlbum.style";
import { ImConfused2 } from "react-icons/im";

const NotResultAlbums = () => {
  return (
    <NotResultContainer>
      <ImConfused2 size={120} color="#1DB954" />;
      <Title>Something was wrong</Title>
    </NotResultContainer>
  );
};

export default NotResultAlbums;
