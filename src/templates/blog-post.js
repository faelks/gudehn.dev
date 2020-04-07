import { graphql } from "gatsby";
import React from "react";
import { Layout } from "../components";

export default ({ data }) => {
  
  const post = data.markdownRemark
  return (
    <Layout>
      <div>Hello blog post</div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`