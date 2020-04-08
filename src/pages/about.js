import React from "react";
import {
  Container,
  Header,
  Layout,
  Stack,
  TextBlock,
  ContactIcons,
} from "../components";

export default () => (
  <Layout>
    <Header title="About" />
    <Container>
      <Stack xPadding="large" yPadding="large" margin="medium">
        <TextBlock>
          Hi! I'm a software engineer currently living with my girlfriend in
          Sydney, Australia.
        </TextBlock>
        <TextBlock>
          I've spent the last few years working full time in my first full-time
          gig out of University where I did a B.Sc. of IT, graduating in 2018.
          After graduating I worked for as a Research Assistant for a time which
          was the followed by my last role at&nbsp;
          <a href="https://glamcorner.com.au">GlamCorner</a>.
        </TextBlock>
        <TextBlock>
          Because of the current global situation with COVID-19 I have been
          required to bring forward my plans for the year, and will be moving to
          my home country again to either pursue a Master's Degree in Computer
          Science or potentially to pursue other Software Engineering roles.
          This means that I am available for whatever cool projects &amp;
          challenges thrown my way for the next couple of months.
        </TextBlock>
        <TextBlock>
          If you are in need of a Developer with industry experience or if you
          just want to say hi feel free to reach out via{" "}
          <a href="mailto:felix.gudehn@gmail.com">email</a>.
        </TextBlock>
        <ContactIcons />
      </Stack>
    </Container>
  </Layout>
);
