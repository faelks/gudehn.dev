import { Link } from "gatsby";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { COLOUR } from "../constants";

const SIDEBAR_WIDTH_PX = 150;

const GlobalStyle = createGlobalStyle`
  html, body, li, ul {
    background-color: ${COLOUR.primary};
    color: ${COLOUR.darkText};
    margin: 0;
    padding: 0;
  }

  li {
    text-decoration: none;
    list-style-type: none;
  }
`

const Sidebar = styled.div`
  position: fixed;
  height: 100%;
  width: ${SIDEBAR_WIDTH_PX}px;
  top: 0;
  left: 0;
  padding-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-right: 1px solid ${COLOUR.secondary};
`

const Content = styled.div`
  position: fixed;
  height: 100%;
  width: calc(100% - ${SIDEBAR_WIDTH_PX}px);
  top: 0;
  left: ${SIDEBAR_WIDTH_PX}px;
`

export default ({ children }) => (
  <>
    <GlobalStyle />
    <Sidebar>
      <Link to="/">Felix Gudéhn</Link>
      <ul>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </Sidebar>
    <Content>
      {children}
    </Content>
  </>
)