import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Layout, PostsTable } from "../components";
import { COLOUR } from "../constants";

const Heading = styled.h2`
  margin: 0;
  font-family: Georgia, serif;
  font-size: 32px;
  font-weight: bold;
  color: ${COLOUR.secondary};
`;

const SubHeading = styled.p`
  margin: 0;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 18px;
  font-weight: normal;
  color: #2a2a2a;
`

const Card = styled.div`
  padding: 30px;
  -webkit-box-shadow: 4px 6px 37px 0px rgba(0,0,0,0.58);
  -moz-box-shadow: 4px 6px 37px 0px rgba(0,0,0,0.58);
  box-shadow: 4px 6px 37px 0px rgba(0,0,0,0.58);
`

export default ({ data }) => {

  console.log(data);
  return (
    <Layout>
      <Card>
        <Heading>Felix Gudéhn</Heading>
        <SubHeading>Work in progress 👷⚒⏱</SubHeading>
      </Card>
      <PostsTable posts={data.allMarkdownRemark.edges} />
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
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