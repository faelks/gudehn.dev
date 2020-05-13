import React from "react";
import styled from "styled-components";
import ProfilePicture from "../assets/profile-picture.jpeg";
import { COLOUR, BREAKPOINT } from "../constants";

const DEFAULT_DIAMETER = 90;

export function ProfileCircle({ diameter, displayBreakpoint }) {
  const diameterPx = `${diameter || DEFAULT_DIAMETER}px`;

  const RoundContainer = styled.div`
    height: ${diameterPx};
    width: ${diameterPx};
    border-radius: ${diameterPx};
    border: 1px solid ${COLOUR.secondary};

    @media ${props => BREAKPOINT[props.breakpoint || "desktopL"]} {
      display: none;
    }
  `;

  const ProfileImage = styled.img`
    max-height: ${diameterPx};
    max-width: ${diameterPx};
    border-radius: ${diameterPx};
  `;

  return (
    <RoundContainer breakpoint={displayBreakpoint}>
      <ProfileImage src={ProfilePicture} alt="Picture of me, Felix Gudéhn!" />
    </RoundContainer>
  );
}
