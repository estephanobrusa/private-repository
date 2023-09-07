import { ImConfused2 } from "react-icons/im";
import { ErrorButton, ErrorContainer, ErrorTitle } from "./error.style";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <ErrorContainer>
      <ImConfused2 size={120} color="#1DB954" />;
      <ErrorTitle>Something was wrong</ErrorTitle>
      <ErrorButton onClick={() => navigate("/")}>back to Home</ErrorButton>
    </ErrorContainer>
  );
};

export default ErrorPage;
