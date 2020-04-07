import { Link } from "gatsby";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import { COLOUR, SCREEN_SIZE } from "../constants";

const SIDEBAR_WIDTH_PX = 150;

const GlobalStyle = createGlobalStyle`
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
`

const Sidebar = styled.div`
  display: flex;
  position: fixed;
  height: 100%;
  width: ${SIDEBAR_WIDTH_PX}px;
  top: 0;
  left: ${({ visible }) => visible ? 0 : `-${SIDEBAR_WIDTH_PX}px`};
  padding-top: 30px;
  align-items: start;
  flex-direction: column;
  border-right: 1px solid ${COLOUR.secondary};
  background-color: ${COLOUR.darkBackground};
`

const Content = styled.div`
  background: linear-gradient(130deg, ${COLOUR.primary} 60%, ${COLOUR.shadedBackground});
  position: fixed;
  height: 100%;
  width: ${({ sidebarVisible }) => sidebarVisible ? `calc(100% - ${SIDEBAR_WIDTH_PX}px)` : "100%"};
  top: 0;
  left: ${({ sidebarVisible }) => sidebarVisible ? `${SIDEBAR_WIDTH_PX}px` : 0};
`

const sidebarPages = [
  ["/", "Felix Gudéhn"],
  ["/projects", "Projects"],
  ["/blog", "Blog"],
  ["/about", "About"],
];

const SidebarLink = styled(props => <Link {...props} />)`
  color: ${COLOUR.secondary};
  background-color: transparent;
  text-decoration: none;
`

const SidebarLinkContainer = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid ${COLOUR.secondary};
`

const SidebarItem = ({ pagePath, pageTitle }) => (
  <SidebarLinkContainer>
    <SidebarLink to={pagePath} children={pageTitle} />
  </SidebarLinkContainer>
)

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

const SidebarFab = ({ onClick, visible }) => {
  return visible ? <Fab onClick={onClick}>❓</Fab> : false;
}

export const Layout = ({ children }) => {
  const initialDisplaySidebar = typeof (window) !== "undefined" && window.innerWidth > SCREEN_SIZE.tablet;
  const [displaySidebar, setDisplaySidebar] = useState(initialDisplaySidebar);


  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Felix Gudéhn</title>
        <link rel="canonical" href="https://felix.gudehn.dev/" />
      </Helmet>
      <Sidebar visible={displaySidebar}>
        <ul>
          {sidebarPages.map(([pagePath, pageTitle]) => (
            <li key={pagePath}><SidebarItem pagePath={pagePath} pageTitle={pageTitle} /></li>
          ))}
        </ul>
      </Sidebar>
      <Content sidebarVisible={displaySidebar} onClick={() => setDisplaySidebar(false)}>
        {children}
      </Content>
      <SidebarFab visible={!displaySidebar} onClick={() => setDisplaySidebar(true)} />
    </>
  )
}