import { Outlet } from "react-router-dom";
import { MainContainer } from "./layout.style";
import { FaSpotify } from "react-icons/fa";

const Layout = () => {
  return (
    <MainContainer>
      <FaSpotify size={120} color="#1DB954" />
      <Outlet />
    </MainContainer>
  );
};

export default Layout;
