import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Row, Stack } from "../components";
import { COLOUR, SIDEBAR_WIDTH_PX } from "../constants";
import { HomeIcon, OpenArmIcon, QuillIcon, TerminalBoxIcon } from "../icons";

const defaultSidebarPages = [
  {
    path: "/",
    title: "Felix Gudéhn",
    icon: <HomeIcon />
  },
  {
    path: "/projects",
    title: "Projects",
    icon: <TerminalBoxIcon />
  },
  {
    path: "/blog",
    title: "Blog",
    icon: <QuillIcon />
  },
  {
    path: "/about",
    title: "About",
    icon: <OpenArmIcon />
  }
]

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
  background-color: ${COLOUR.mono[17]};
`

const StyledLink = styled(props => <Link {...props} />)`
  color: ${COLOUR.secondary};
  background-color: transparent;
  text-decoration: none;
  font-size: 18px;
  line-height: 18px;
`

const SidebarRow = styled(props => <Row {...props} />)`
  border-bottom: 1px solid ${COLOUR.secondary};

  & > svg {
    fill: ${COLOUR.secondary};
  }

  & > * {
    color: ${COLOUR.secondary};
  }
`

export const Sidebar = ({ links, isOpen }) => {
  const sidebarPages = links || defaultSidebarPages;

  return (
    <SidebarContainer open={isOpen}>
      <Stack margin="large">
        {sidebarPages.map(({ path, title, icon }) => (
          <SidebarRow key={path + title} justify="left" margin="small" yPadding="small" xPadding="large">
            {icon}
            <StyledLink to={path}>
              {title}
            </StyledLink>
          </SidebarRow>
        ))}
      </Stack>
    </SidebarContainer>
  )
}