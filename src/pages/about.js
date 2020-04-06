import React from "react";
import styled from "styled-components";
import { Layout } from "../components/layout";
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
    <Heading>About</Heading>
    <p>Hi! I'm a software engineer currently based in Sydney, Australia but will soon move to Stockholm, Sweden</p>
  </Layout>
)