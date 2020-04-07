import { graphql } from "gatsby";
import React from "react";
import { Layout, Header, Container } from "../components";

export default ({ data }) => {

  const post = data.markdownRemark
  return (
    <Layout>
      <Header title={post.frontmatter.title}>
        {post.frontmatter.date}
      </Header>
      <Container padding="small">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  );
}

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
`