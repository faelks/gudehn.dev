import React from "react";
import styled from "styled-components";
import { Container, Header, Layout, PostsTable, Stack } from "../components";
import { COLOUR } from "../constants";

const SubHeading = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: normal;
  color: ${COLOUR.mono[1]};
`

const Break = styled.br`
  margin: 5px 0;
`

export default () => {

  return (
    <Layout>
      <Header title="Felix Gudéhn">
        <SubHeading>Work in progress <span role="img" aria-label="working-emojis">👷⚒⏱</span></SubHeading>
      </Header>
      <Container padding="small">
        <Stack xPadding="medium" margin="medium">
          <p>
            Hi! My name is Felix and I'm a software developer.
          </p>
          <p>
            Currently I am working on getting this website up and running
            as well as brushing up on my JS 'deep' knowledge with Dan Abrahamov's&nbsp;
            <a href="https://justjavascript.com/">Just Javascript</a> course and Kyle Simpson's&nbsp;
            <a href="https://github.com/getify/You-Dont-Know-JS">You Don't Know JS</a> course.
          </p>
          <Break />
          <div>
            <h3>Recent Blog Posts</h3>
            <PostsTable />
          </div>
        </Stack>
      </Container>
    </Layout >
  );
}
