import React, { useEffect } from "react";
import styled from "styled-components";
import { Container, Header, Layout, Row, Stack } from "../components";
import { COLOUR } from "../constants";
import { addTouchAnimation } from "@faelks/touch-animate";

const projects = [
  {
    title: "Touch Animate",
    id: "touch-animate",
    description: "Touch animation package for animating browser click events",
    link: "https://github.com/faelks/touch-animate",
  },
  {
    title: "Cipelist",
    id: "cipelist",
    description:
      "A tinder-style Android app for finding succulent recipes quickly",
    link: "https://github.com/faelks/cipelist",
  },
  {
    title: "Hippo Health",
    id: "hippo-health",
    description: "A (now abandoned) attempt to create a hospital companion app",
    link: "https://github.com/hippo-health",
  },
  {
    title: "Calculator",
    id: "calc",
    description: "A basic calculator app based on the samsung mobile calculator app",
    link: "https://calc.faelks.now.sh/"
  }
];

const ProjectCard = styled.div`
  padding: 10px;
  border: 1px solid ${COLOUR.mono[2]};
  border-radius: 5px;

  &:hover {
    transform: translateY(2px);
    border-color: ${COLOUR.secondary};
  }
`;

export default () => {
  useEffect(() => {
    addTouchAnimation({
      element: document.getElementById("touch-animate"),
      duration: 800,
      colour: COLOUR.secondary,
      steps: 100,
      radius: 60,
      type: "particle",
    });
  }, []);

  return (
    <Layout>
      <Header title="Projects" />
      <Container padding="medium">
        <Stack margin="small">
          {projects.map(({ title, description, link, id }) => (
            <ProjectCard key={title} id={id}>
              <Row margin="small">
                <h4>{title}</h4>
                {link && <a href={link}>repo</a>}
              </Row>
              <p>{description}</p>
            </ProjectCard>
          ))}
        </Stack>
      </Container>
    </Layout>
  );
};
