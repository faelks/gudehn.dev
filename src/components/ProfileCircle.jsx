import React from "react";
import styled from "styled-components";
import ProfilePicture from "../assets/profile-picture.jpeg";
import { COLOUR, BREAKPOINT } from "../constants";

const DEFAULT_DIAMETER = 90;

const RoundContainer = styled.div`
  height: ${props => props.diameterPx};
  width: ${props => props.diameterPx};
  border-radius: ${props => props.diameterPx};
  border: 1px solid ${COLOUR.secondary};

  @media ${props => BREAKPOINT[props.breakpoint || "desktopL"]} {
    display: none;
  }
`;

const ProfileImage = styled.img`
  max-height: ${props => props.diameterPx};
  max-width: ${props => props.diameterPx};
  border-radius: ${props => props.diameterPx};
`;

export function ProfileCircle({ diameter, displayBreakpoint }) {
  const diameterPx = `${diameter || DEFAULT_DIAMETER}px`;

  return (
    <RoundContainer breakpoint={displayBreakpoint} diameterPx={diameterPx}>
      <ProfileImage
        src={ProfilePicture}
        alt="Picture of me, Felix Gudéhn!"
        diameterPx={diameterPx}
      />
    </RoundContainer>
  );
}
