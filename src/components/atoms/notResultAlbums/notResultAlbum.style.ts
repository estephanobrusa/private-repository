import styled from "styled-components";
import { colors } from "../../../const/colors";

export const NotResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.primary};
`;
