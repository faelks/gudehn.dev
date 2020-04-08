import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Stack } from ".";
import styled from "styled-components";
import { COLOUR } from "../constants";

const PostItem = styled.div`
  padding: 10px 5px;

  &:hover {
    border-left: 1px solid ${COLOUR.secondary};
  }
`;

const PostMetaData = styled.p`
  font-weight: 350;
  margin-bottom: 5px;
`;

const query = graphql`
  query PostsTableQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
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
`;

export const PostsTable = ({ limit }) => {
  const data = useStaticQuery(query);

  return (
    <Stack margin="medium">
      {data &&
        data.allMarkdownRemark.edges.slice(0, limit || 10).map(({ node }) => (
          <PostItem key={node.id}>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
            <PostMetaData>
              {node.frontmatter.date} ({node.wordCount.words} words)
            </PostMetaData>
            <p>{node.excerpt}</p>
          </PostItem>
        ))}
    </Stack>
  );
};
