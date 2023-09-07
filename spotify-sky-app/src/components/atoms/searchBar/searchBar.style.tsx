import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-self: flex-end;
  width: 100px;
  height: 40px;
  justify-items: flex-end;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 5px;

  @media (max-width: 1024px) {
    transition: width 0.3s;
    &:hover {
      width: 100%;
      cursor: pointer;
    }
  }

  @media (min-width: 1024px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding-left: 15px;
  background-color: transparent;
  color: #fff;
  &::placeholder {
    color: #b8b7b7;
  }
`;
