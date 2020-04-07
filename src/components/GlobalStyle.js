import { createGlobalStyle } from "styled-components";
import { COLOUR, FONT } from "../constants";

export const GlobalStyle = createGlobalStyle`
  html, body {
    color: ${COLOUR.darkText};
    font-family: ${FONT.secondary};
    min-height: 100%;
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
    margin: 0;
    padding: 0;
  }

  p, li, span, a {
    font-family: ${FONT.secondary};
    margin: 0;
    padding: 0;
  }
`