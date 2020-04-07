import styled from "styled-components";
import { PADDING } from "../constants";

export const Container = styled.div`
  max-width: 900px;
  padding: ${({ padding }) => PADDING[padding] || 0}px;
`