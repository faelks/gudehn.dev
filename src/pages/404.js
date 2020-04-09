import React from "react";
import { Container, Header, Layout, PostsTable, Stack } from "../components";

export default () => (
  <Layout>
    <Header title="404 Not Found"></Header>
    <Container padding="medium">
      <Stack yPadding="medium">
        <h4>
          There was no page found here, try one of these blog posts instead!
        </h4>
        <PostsTable />
      </Stack>
    </Container>
  </Layout>
);
