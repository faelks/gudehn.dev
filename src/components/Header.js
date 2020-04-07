import React from "react";
import styled from "styled-components";
import { Stack } from "../components";
import { COLOUR } from "../constants";

const HeaderContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${COLOUR.mono[1]};
  background-color: ${COLOUR.mono[17]};
`;

const Heading = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: bold;
  color: ${COLOUR.secondary};
`;

export const Header = ({ title, children }) => (
  <HeaderContainer>
    <Stack>
      <Heading>{title}</Heading>
      {children}
    </Stack>
  </HeaderContainer>
)