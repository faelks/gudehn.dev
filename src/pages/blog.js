import { graphql } from "gatsby";
import React from "react";
import { Container, Header, Layout, PostsTable, Stack } from "../components";

export default ({ data }) => (
  <Layout>
    <Header title="Blog Posts" />
    <Container padding="small">
      <Stack>
        <PostsTable posts={data.allMarkdownRemark.edges} />
      </Stack>
    </Container>
  </Layout>
)

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`