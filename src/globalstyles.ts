// add globalstyles component
import { createGlobalStyle } from "styled-components";
import { colors } from "./const/colors";

export const GlobalStyles = createGlobalStyle`
#root {
  max-width: 1280px;
  margin: 0 ;
  text-align: center;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  display: flex;
  min-width: 320px;
  min-height: 100vh;
  background-color: ${colors.background};
  font-family: 'Roboto', sans-serif;
}
`;
