import styled from "styled-components";
import { PADDING, CONTENT_MAX_WIDTH_PX } from "../constants";

export const Container = styled.div`
  max-width: ${CONTENT_MAX_WIDTH_PX}px;
  padding: ${({ padding }) => PADDING[padding] || 0}px;
`