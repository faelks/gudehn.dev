import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Fab, GlobalStyle, Sidebar } from ".";
import { COLOUR, SCREEN_SIZE, SIDEBAR_WIDTH_PX, BREAKPOINT } from "../constants";
import { MenuIcon } from "../icons";
import { inferEnv } from "../util";

const Content = styled.div`
  position: absolute;
  min-height: 100%;
  width: 100%;
  left: 0;

  @media ${BREAKPOINT.tablet} {
    left: ${SIDEBAR_WIDTH_PX}px;
    width: calc(100% - ${SIDEBAR_WIDTH_PX}px);

    &::after {
      display: none;
    }
  }

  &::after {
    content: "";
    filter: blur(0px);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: black;
    opacity: ${({ sidebarVisible }) => sidebarVisible ? 0.6 : 0};
    transition: opacity 0.1s ease-in-out;
    z-index: ${({ sidebarVisible }) => sidebarVisible ? 0 : -2};
  }
`

const Background = styled.div`
  background: linear-gradient(130deg, ${COLOUR.primary} 60%, ${COLOUR.shadedBackground});
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export const Layout = ({ children }) => {
  const env = inferEnv();
  const pageTitle = inferEnv() === "development" ? "gudehn.dev 🏗" : "Felix Gudéhn";
  const initialDisplaySidebar = env !== "node" && window.innerWidth > SCREEN_SIZE.tablet;

  const [displaySidebar, setDisplaySidebar] = useState(initialDisplaySidebar);

  const showSidebar = () => setDisplaySidebar(true);
  const hideSidebar = () => setDisplaySidebar(false);

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <link rel="canonical" href="https://felix.gudehn.dev/" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,700;1,400&family=Podkova:wght@500;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Sidebar isOpen={displaySidebar} />
      <Background onClick={hideSidebar} />
      <Content sidebarVisible={displaySidebar} onClick={hideSidebar}>
        {children}
      </Content>
      {!displaySidebar && (
        <Fab onClick={showSidebar}><MenuIcon /></Fab>
      )}
    </>
  )
}