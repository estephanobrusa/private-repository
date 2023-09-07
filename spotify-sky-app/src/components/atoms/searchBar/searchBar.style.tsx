import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 40px;
  position: relative;
  height: 40px;
  justify-items: flex-end;
  border: 1px solid #ccc;
  border-radius: 25px;
  color: #fff;

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
  display: flex;
  width: 100%;
  border: none;
  outline: none;
  padding-left: 10px;
  font-size: 16px;
  background-color: transparent;
  color: #fff;
  &::placeholder {
    color: #b8b7b7;
  }
  @media (max-width: 1024px) {
    &::placeholder {
      color: transparent;
    }
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 25%;
  right: 10px;
  bottom: 50%;
`;
