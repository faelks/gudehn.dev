import React from "react";
import styled from "styled-components";
import { MARGIN } from "../constants";


export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ margin }) => MARGIN[margin] || 0}px;

  & > * {
    margin-bottom: ${({ margin }) => MARGIN[margin] || 0}px;
  } 
`;