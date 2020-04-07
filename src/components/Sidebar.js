import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { COLOUR, SIDEBAR_WIDTH_PX } from "../constants";

const SidebarContainer = styled.div`
  display: flex;
  position: fixed;
  height: 100%;
  width: ${SIDEBAR_WIDTH_PX - 1}px;
  top: 0;
  left: ${({ open }) => open ? 0 : `-${SIDEBAR_WIDTH_PX}px`};
  padding-top: 30px;
  align-items: start;
  flex-direction: column;
  border-right: 1px solid ${COLOUR.secondary};
  background-color: ${COLOUR.mono[16]};
`

const SidebarLinks = styled.ul`
  width: 100%;
`

const SidebarLink = styled(props => <Link {...props} />)`
  color: ${COLOUR.secondary};
  background-color: transparent;
  text-decoration: none;
`

const SidebarLinkContainer = styled.li`
  padding: 10px 20px;
  border-bottom: 1px solid ${COLOUR.secondary};
`

const SidebarItem = ({ pagePath, pageTitle }) => (
  <SidebarLinkContainer>
    <SidebarLink to={pagePath} children={pageTitle} />
  </SidebarLinkContainer>
)


export const Sidebar = ({ links, isOpen }) => {
  return (
    <SidebarContainer open={isOpen}>
      <SidebarLinks>
        {links.map(([pagePath, pageTitle]) => (
          <SidebarItem key={pageTitle} pagePath={pagePath} pageTitle={pageTitle} />
        ))}
      </SidebarLinks>
    </SidebarContainer>
  )
}