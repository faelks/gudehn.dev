import React from "react";
import styled from "styled-components";
import { Row } from "../components";
import {
  LinkedInIcon,
  StackOverflowIcon,
  GithubIcon,
  MailIcon,
  TwitterFill,
} from "../icons";
import { COLOUR } from "../constants";

const IconLink = styled.a`
  text-decoration: none;
  cursor: pointer;

  & > svg {
    width: 30px;
    height: 30px;
    fill: ${COLOUR.secondary};

    &:hover {
      transform: translateY(1px);
      fill: ${COLOUR.highlight}
    }
  }
`;

export const ContactIcons = () => (
  <Row margin="medium">
    <IconLink href="https://www.linkedin.com/in/felixgudehn/">
      <LinkedInIcon />
    </IconLink>
    <IconLink href="https://stackoverflow.com/users/5163002/faelks">
      <StackOverflowIcon />
    </IconLink>
    <IconLink href="https://github.com/faelks">
      <GithubIcon />
    </IconLink>
    <IconLink href="mailto:felix.gudehn@gmail.com">
      <MailIcon />
    </IconLink>
    <IconLink href="https://twitter.com/Feellan">
      <TwitterFill />
    </IconLink>
  </Row>
);
