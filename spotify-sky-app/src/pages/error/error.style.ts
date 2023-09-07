import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const ErrorTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #b6b6b6;
`;

export const ErrorButton = styled.div`
  max-width: 200px;
  height: auto;
  padding: 10px 20px;
  border: 1px solid #1db954;
  border-radius: 50px;
  color: #b6b6b6;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
