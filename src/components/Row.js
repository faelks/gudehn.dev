import styled from "styled-components";
import { MARGIN, PADDING } from "../constants";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify};
  padding: ${({ xPadding, yPadding }) =>
    `${PADDING[yPadding] || 0}px ${PADDING[xPadding] || 0}px`};
  align-items: center;
  width: auto;
  flex-wrap: ${({ wrap }) => (wrap === "true" ? "wrap" : "nowrap")};

  & > * {
    margin-right: ${({ margin }) => MARGIN[margin] || 0}px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
