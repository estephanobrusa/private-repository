import { Outlet } from "react-router-dom";
import { MainContainer } from "./layout.style";

const Layout = () => {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
};

export default Layout;
