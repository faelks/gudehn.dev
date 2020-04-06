import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { COLOUR } from "../constants";

const Heading = styled.h2`
  margin: 0;
  font-family: Georgia, serif;
  font-size: 32px;
  font-weight: bold;
  color: ${COLOUR.darkText};
`;

export default () => (
  <Layout>
    <Heading>Projects</Heading>
    <p>Mouse event project</p>
    <p>Cipelist</p>
    <p>Hippo</p>
    <p>Huus</p>
    <p>Hamster Service</p>
  </Layout>
)