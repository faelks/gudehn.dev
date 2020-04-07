import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { GlobalStyle, Sidebar } from ".";
import { COLOUR, SCREEN_SIZE, SIDEBAR_WIDTH_PX } from "../constants";
import { inferEnv } from "../util";

const sidebarPages = [
  ["/", "Felix Gudéhn"],
  ["/projects", "Projects"],
  ["/blog", "Blog"],
  ["/about", "About"],
];

const Content = styled.div`
  background: linear-gradient(130deg, ${COLOUR.primary} 60%, ${COLOUR.shadedBackground});
  position: fixed;
  height: 100%;
  width: ${({ sidebarVisible }) => sidebarVisible ? `calc(100% - ${SIDEBAR_WIDTH_PX}px)` : "100%"};
  top: 0;
  left: ${({ sidebarVisible }) => sidebarVisible ? `${SIDEBAR_WIDTH_PX}px` : 0};
`

const Fab = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  height: 40px;
  width: 40px;
  border-radius: 5px;
  border: 1px solid ${COLOUR.secondary};
  text-align: center;
  line-height: 40px;
  font-size: 25px;
`

export const Layout = ({ children }) => {
  const env = inferEnv();
  const pageTitle = inferEnv() === "development" ? "gudehn.dev 🏗" : "Felix Gudéhn";
  const initialDisplaySidebar = env !== "node" && window.innerWidth > SCREEN_SIZE.tablet;

  const [displaySidebar, setDisplaySidebar] = useState(initialDisplaySidebar);


  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <link rel="canonical" href="https://felix.gudehn.dev/" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,700;1,400&family=Podkova:wght@500;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Sidebar isOpen={displaySidebar} links={sidebarPages} />
      <Content sidebarVisible={displaySidebar} onClick={() => setDisplaySidebar(false)}>
        {children}
      </Content>
      {!displaySidebar && (
        <Fab onClick={() => setDisplaySidebar(true)} />
      )}
    </>
  )
}