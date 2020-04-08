import styled from "styled-components";
import { COLOUR, BREAKPOINT } from "../constants";

export const Fab = styled.div`
    position: fixed;
    bottom: 10px;
    right: 10px;
    height: 36px;
    width: 40px;
    border-radius: 5px;
    border: 1px solid ${COLOUR.secondary};
    background-color: ${COLOUR.mono[17]};

    display: ${({ hide }) => hide ? "none" : "flex"};
    align-items: center;
    justify-content: center;

    /* Not handling unknown or undefined prop */
    @media ${({ hideBreakpoint }) => BREAKPOINT[hideBreakpoint]} {
      display: none;
    }

    & > svg {
      fill: ${COLOUR.secondary};
    }
`