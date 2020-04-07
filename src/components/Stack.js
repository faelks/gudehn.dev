import styled from "styled-components";
import { MARGIN, PADDING } from "../constants";

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin-top: ${({ margin }) => MARGIN[margin] || 0}px;
  padding: ${({ xPadding, yPadding }) => `${PADDING[yPadding] || 0}px ${PADDING[xPadding] || 0}px`};

  & > * {
    margin-bottom: ${({ margin }) => MARGIN[margin] || 0}px;
  } 
`;