import { Link, useStaticQuery } from "gatsby";
import React from "react";
import { Stack } from ".";
import styled from "styled-components";

const PostItem = styled.div`
  padding: 10px 5px;
`

const PostMetaData = styled.p`
  font-weight: 350;
  margin-bottom: 5px;
`

export const query = graphql`
  query PostsTableQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "D MMM YYYY")
          }
          fields {
            slug
          }
          excerpt
          wordCount {
            words
          }
        }
      }
    }
  }
`

export const PostsTable = () => {
  const data = useStaticQuery(query);

  return (
    <Stack margin="medium">
      {data && data.allMarkdownRemark.edges.map(({ node }) => (
        <PostItem key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
          <PostMetaData>{node.frontmatter.date} ({node.wordCount.words} words)</PostMetaData>
          <p>{node.excerpt}</p>
        </PostItem>
      ))}
    </Stack>
  )
}

