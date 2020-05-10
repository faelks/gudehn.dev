import React from "react";
import styled from "styled-components";
import ProfilePicture from "../assets/profile-picture.jpeg";
import { COLOUR } from "../constants";

const DEFAULT_DIAMETER = 90;

export function ProfileCircle({ diameter }) {
  const diameterPx = `${diameter || DEFAULT_DIAMETER}px`;

  const RoundContainer = styled.div`
    height: ${diameterPx};
    width: ${diameterPx};
    border-radius: ${diameterPx};
    border: 1px solid ${COLOUR.secondary};
  `;

  const ProfileImage = styled.img`
    max-height: ${diameterPx};
    max-width: ${diameterPx};
    border-radius: ${diameterPx};
  `;

  return (
    <RoundContainer>
      <ProfileImage src={ProfilePicture} />
    </RoundContainer>
  );
}
