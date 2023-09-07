import styled from "styled-components";

export const AlbumDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const Text = styled.span`
  color: #fff;
  font-size: 20px;
  text-align: start;
`;

export const Tracks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Track = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;

  :hover {
    background-color: #333333;
    cursor: pointer;
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
`;
