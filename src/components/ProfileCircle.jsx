import React from "react";
import styled from "styled-components";
import ProfilePicture from "../assets/profile-picture.jpeg";
import { COLOUR, BREAKPOINT } from "../constants";

const DEFAULT_DIAMETER = 90;

export function ProfileCircle({ diameter, displayBreakpoint }) {
  const diameterPx = `${diameter || DEFAULT_DIAMETER}px`;

  let breakpointMediaQuery = "";
  if (breakpoint) {
    breakpointMediaQuery = `
      @media ${BREAKPOINT[displayBreakpoint]} {
        display: none;
      }
    `
  }


  const RoundContainer = styled.div`
    height: ${diameterPx};
    width: ${diameterPx};
    border-radius: ${diameterPx};
    border: 1px solid ${COLOUR.secondary};

    ${breakpointMediaQuery}
  `;

  const ProfileImage = styled.img`
    max-height: ${diameterPx};
    max-width: ${diameterPx};
    border-radius: ${diameterPx};
  `;

  return (
    <RoundContainer>
      <ProfileImage src={ProfilePicture} alt="Picture of me, Felix Gudéhn!" />
    </RoundContainer>
  );
}
