import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Row, Stack } from "../components";
import { COLOUR, SIDEBAR_WIDTH_PX, BREAKPOINT } from "../constants";
import { HomeIcon, OpenArmIcon, QuillIcon, TerminalBoxIcon } from "../icons";

const defaultSidebarPages = [
  {
    path: "/",
    title: "Felix Gudéhn",
    icon: <HomeIcon />,
  },
  {
    path: "/projects",
    title: "Projects",
    icon: <TerminalBoxIcon />,
  },
  {
    path: "/blog",
    title: "Blog",
    icon: <QuillIcon />,
  },
  {
    path: "/about",
    title: "About",
    icon: <OpenArmIcon />,
  },
];

const SidebarContainer = styled.div`
  display: flex;
  position: fixed;
  height: 100%;
  width: ${SIDEBAR_WIDTH_PX - 1}px;
  top: 0;
  left: ${({ open }) => (open ? 0 : `-${SIDEBAR_WIDTH_PX}px`)};
  padding-top: 30px;
  align-items: start;
  flex-direction: column;
  border-right: 1px solid ${COLOUR.secondary};
  background-color: ${COLOUR.mono[16]};
  transition: all 0.25s ease-in-out;
  z-index: 1;

  @media ${BREAKPOINT.tablet} {
    left: 0;
  }
`;

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
`;

const LinkTitle = styled.h2`
  background-color: transparent;
  text-decoration: none;
  font-size: 18px;
  line-height: 18px;

  &:active,
  &:hover {
    text-decoration: none;
  }
`;

const SidebarRow = styled(props => <Row {...props} />)`
  border-bottom: 1px solid ${COLOUR.secondary};
  cursor: pointer;

  & > svg {
    fill: ${COLOUR.secondary};
  }
  & > h2 {
    color: ${COLOUR.secondary};
  }

  &:hover {
    & > svg {
      fill: ${COLOUR.highlight};
    }
    & > h2 {
      color: ${COLOUR.highlight};
    }
  }
`;

export const Sidebar = ({ links, isOpen }) => {
  const sidebarPages = links || defaultSidebarPages;

  return (
    <SidebarContainer open={isOpen}>
      <Stack margin="large">
        {sidebarPages.map(({ path, title, icon }) => (
          <StyledLink to={path} key={path + title}>
            <SidebarRow
              justify="left"
              margin="medium"
              yPadding="small"
              xPadding="large"
            >
              {icon}
              <LinkTitle>{title}</LinkTitle>
            </SidebarRow>
          </StyledLink>
        ))}
      </Stack>
    </SidebarContainer>
  );
};
