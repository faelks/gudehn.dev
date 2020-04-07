import styled from "styled-components";
import { COLOUR } from "../constants";

export const Fab = styled.div`
    position: fixed;
    bottom: 10px;
    left: 10px;
    height: 36px;
    width: 40px;
    border-radius: 5px;
    border: 1px solid ${COLOUR.secondary};
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
      fill: ${COLOUR.secondary};
    }
`