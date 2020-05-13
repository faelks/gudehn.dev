import React from "react";
import { Link } from "gatsby";
import {
  Container,
  Header,
  Layout,
  PostsTable,
  Stack,
  SubHeading,
  Break,
  TextBlock,
  ProfileCircle,
} from "../components";

export default () => {
  return (
    <Layout>
      <Stack yPadding="large" items="center">
        <ProfileCircle diameter={120} displayBreakpoint="desktopL" />
        <Header title="Felix Gudéhn">
          <SubHeading>
            Work in progress{" "}
            <span role="img" aria-label="working-emojis">
              👷⚒⏱
            </span>
          </SubHeading>
        </Header>
      </Stack>
      <Container padding="small">
        <Stack xPadding="medium" margin="medium">
          <Stack margin="medium">
            <TextBlock>
              Hi!
              <br />
              I'm Felix and work as a software developer. Checkout{" "}
              <Link to="/projects">my work</Link>&nbsp;or have a read through
              one of my <Link to="/blog">blog posts</Link>. You can find ways to
              reach me <Link to="/about">here</Link>.
            </TextBlock>
            <TextBlock>
              Currently I am working on getting this website up and running as
              well as brushing up on my JS 'deep' knowledge with Dan
              Abrahamov's&nbsp;
              <a href="https://justjavascript.com/">Just Javascript</a> course
              and Kyle Simpson's&nbsp;
              <a href="https://github.com/getify/You-Dont-Know-JS">
                You Don't Know JS
              </a>{" "}
              course.
            </TextBlock>
          </Stack>
          <Break />
          <Stack>
            <h3>Recent Blog Posts</h3>
            <PostsTable limit={4} />
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
};
