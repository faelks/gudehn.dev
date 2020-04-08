import { graphql } from "gatsby";
import React from "react";
import { Container, Header, Layout, PostsTable, Stack } from "../components";

export default ({ data }) => (
  <Layout>
    <Header title="Blog Posts" />
    <Container padding="small">
      <Stack>
        <PostsTable />
      </Stack>
    </Container>
  </Layout>
)
