import styled from "styled-components";

export const AlbumDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const Text = styled.span`
  width: 100%;
  color: #b6b6b6;
  font-size: 20px;
  white-space: wrap;
`;

export const Tracks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Track = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #5f5b5b;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #4f5051;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const TopTable = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const AlbumBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  :hover {
    cursor: pointer;
  }
`;

export const AlbumBoxImage = styled.img`
  width: 200px;
  border-radius: 10px;
  box-shadow: 8px 10px 19px 9px rgba(254, 252, 252, 0.301);
`;

export const AlbumTitle = styled.span`
  font-size: 20px;
  color: #b6b6b6;
`;
