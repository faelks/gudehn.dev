import React from "react";
import styled from "styled-components";
import { Container, Header, Layout, Row, Stack } from "../components";
import { COLOUR } from "../constants";

const projects = [
  {
    title: "Mouse Event Project",
    description: "COMING SOON",
    link: null
  },
  {
    title: "Cipelist",
    description: "A tinder-style Android app for finding succulent recipes quickly",
    link: "https://github.com/faelks/cipelist"
  },
  {
    title: "Hippo Health",
    description: "A (now abandoned) attempt to create a hospital companion app",
    link: "https://github.com/hippo-health"
  },
  {
    title: "Huus",
    description: "An unfinished prototype for storing and managing receipts in a household",
    link: "https://github.com/faelks/huus"
  },
  {
    title: "Hamster Service",
    description: "Automated email delivery service for hamster pictures",
    link: null
  }
]

const ProjectCard = styled.div`
  padding: 10px;
  border: 1px solid ${COLOUR.mono[2]};
  border-radius: 5px;

  &:hover {
    transform: translateY(2px);
    border-color: ${COLOUR.secondary};
  }
`

export default () => (
  <Layout>
    <Header title="Projects" />
    <Container padding="medium">
      <Stack margin="small">
        {projects.map(({ title, description, link }) => (
          <ProjectCard>
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
)