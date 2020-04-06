import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
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
    <Heading>Blog</Heading>
    <p>Some post about Tailwind</p>
    <p>Some post about Cypress</p>
    <p>Some post about Jest</p>
  </Layout>
)