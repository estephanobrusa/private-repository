import { BiSolidErrorCircle } from "react-icons/bi";
import { NotFoundContainer, NotFoundTitle } from "./notFound.style";

const Notfound = () => {
  return (
    <NotFoundContainer>
      <BiSolidErrorCircle size={120} color="#1DB954" />;
      <NotFoundTitle>Page not Found</NotFoundTitle>
    </NotFoundContainer>
  );
};

export default Notfound;
