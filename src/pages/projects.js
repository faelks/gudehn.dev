import React from "react";
import { Header, Layout, Stack, Container } from "../components";

export default () => (
  <Layout>
    <Header title="Projects" />
    <Container padding="medium">
      <Stack margin="small">
        <p>Mouse event project</p>
        <p>Cipelist</p>
        <p>Hippo</p>
        <p>Huus</p>
        <p>Hamster Service</p>
      </Stack>
    </Container>
  </Layout>
)