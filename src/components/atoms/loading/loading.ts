import styled, { keyframes } from "styled-components";
import { colors } from "../../../const/colors";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingSpinner = styled.div`
  border: 8px solid ${colors.primary};
  border-top: 8px solid ${colors.fourth};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spinAnimation} 2s linear infinite;
`;
