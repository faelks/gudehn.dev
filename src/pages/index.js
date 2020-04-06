import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { COLOUR } from "../constants";

const Heading = styled.h2`
  margin: 0;
  font-family: Georgia, serif;
  font-size: 32px;
  font-weight: bold;
  color: ${COLOUR.secondary};
`;

const SubHeading = styled.p`
  margin: 0;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 18px;
  font-weight: normal;
  color: #2a2a2a;
`

export default () => (
  <Layout>
    <Heading>Felix Gudéhn</Heading>
    <SubHeading>Work in progress 👷⚒⏱</SubHeading>
  </Layout>
)