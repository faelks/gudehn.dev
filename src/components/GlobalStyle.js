import { createGlobalStyle } from "styled-components";
import { COLOUR, FONT } from "../constants";

export const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${COLOUR.primary};
    color: ${COLOUR.darkText};
    margin: 0;
    padding: 0;
  }

  ul, li {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${FONT.primary};
    font-weight: 550;
  }

  p, li, span, a {
    font-family: ${FONT.secondary};
  }
`