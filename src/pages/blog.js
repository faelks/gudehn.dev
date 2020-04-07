import React from "react";
import { Layout, Header, Stack, Container } from "../components";

export default () => (
  <Layout>
    <Header title="Blog Posts" />
    <Container padding="small">
      <Stack>
        <p>Some post about Tailwind</p>
        <p>Some post about Cypress</p>
        <p>Some post about Jest</p>
      </Stack>
    </Container>
  </Layout>
)