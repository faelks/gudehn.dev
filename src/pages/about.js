import React from "react";
import { Container, Header, Layout, Stack } from "../components";

export default () => (
  <Layout>
    <Header title="About" />
    <Container padding="medium">
      <Stack>
        <p>Hi! I'm a software engineer currently based in Sydney, Australia but will soon move to Stockholm, Sweden</p>
      </Stack>
    </Container>
  </Layout>
)