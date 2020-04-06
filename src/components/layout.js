import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
  }
`
export default ({ children }) => (
  <React.Fragment>
    <GlobalStyle theme="purple" />
    {children}
  </React.Fragment>
)