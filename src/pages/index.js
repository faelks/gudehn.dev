import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Layout, PostsTable, Header, Container } from "../components";
import { COLOUR } from "../constants";

const SubHeading = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: normal;
  color: ${COLOUR.mono[1]};
`

export default ({ data }) => {

  return (
    <Layout>
      <Header title="Felix Gudéhn">
        <SubHeading>Work in progress 👷⚒⏱</SubHeading>
      </Header>
      <Container padding="small">
        <PostsTable posts={data.allMarkdownRemark.edges} />
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query IndexPageQuery {
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