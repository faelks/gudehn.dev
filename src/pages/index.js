import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-between;
  height: 5rem;
`

const Heading = styled.h2`
  margin: 0;
  font-family: Georgia, serif;
  font-size: 32px;
  font-weight: bold;
  color: #2a2a2a;
`;

const SubHeading = styled.p`
  margin: 0;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 18px;
  font-weight: normal;
  color: #2a2a2a;
`

export default () => (
  <Container>
    <Heading>Felix Gudéhn</Heading>
    <SubHeading>Work in progress 👷⚒⏱</SubHeading>
  </Container>
)