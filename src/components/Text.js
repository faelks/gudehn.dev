import styled from "styled-components";
import { COLOUR } from "../constants";

export const TextBlock = styled.p`
  line-height: 1.75em;
  letter-spacing: 1.1;
`;

export const SubHeading = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: normal;
  color: ${COLOUR.mono[1]};
`

export const Break = styled.br`
  margin: 5px 0;
`