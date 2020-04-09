import { graphql } from "gatsby";
import React from "react";
import { Layout, Header, Container } from "../components";
import styled from "styled-components";

const Markdown = styled.div`
  padding: 50px 0;

  & > * {
    margin-bottom: 20px;
  }

  & > p {
    font-size: 16px;
    line-height: 1.5em;
    letter-spacing: 1.1;
    font-weight: 450;
  }

  & a {
    text-shadow: 0 4px #a99ab95c;
  };
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Header title={post.frontmatter.title}>{post.frontmatter.date}</Header>
      <Container padding="medium">
        <Markdown dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
