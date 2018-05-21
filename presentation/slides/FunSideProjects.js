import React from "react";
import styled from "react-emotion";
import { Heading, Layout, Notes, Slide, SlideSet } from "spectacle";
import Link from "../components/Link";
import Note from "../components/Note";

const Iframe = styled("iframe")`
  height: 600px;
  width: 100%;
  margin: 24px;
  border: none;
`;

const TweetContainer = styled("div")`
  display: flex;
  justify-content: center;
`;

class TweetVideo extends React.Component {
  componentDidMount() {
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  }

  render() {
    return (
      <TweetContainer>
        <blockquote className="twitter-video" data-lang="en">
          <a href="https://twitter.com/kevin_kipp/status/937862576121237504?ref_src=twsrc%5Etfw" />
        </blockquote>
      </TweetContainer>
    );
  }
}

export default (
  <SlideSet>
    <Slide>
      <Heading>Some of my side projects</Heading>
    </Slide>
    <Slide bgColor="secondary">
      <Heading margin="0 0 24px 0">
        <Link href="https://github.com/third774/image-focus" target="_blank">
          Image Focus
        </Link>
      </Heading>
      <Layout>
        <Iframe src="https://image-focus.stackblitz.io/" />
      </Layout>
      <Notes>
        <Note>
          One challenge faced when designing websites is that you never know
          what size the screen will be when people visit. They might be on a
          mobile device, or a desktop with a large monitor. This small utility
          that I built helps with this problem by being able to pick a single
          point to always make sure it is in the frame.
        </Note>
      </Notes>
    </Slide>
    <Slide bgColor="primary">
      <Heading fit margin={24} textColor="quarternary">
        <Link
          href="https://github.com/third774/twitter-christmas"
          target="_blank"
        >
          Twitter Christmas Lights
        </Link>
      </Heading>
      <TweetVideo />
      <Notes>
        <Note>
          This was a fun thing I made last year before Christmas - twitter
          powered Christmas lights! They are dim until someone tweets using
          #Christmas and then they briefly get brighter before fading again.
        </Note>
      </Notes>
    </Slide>
    <Slide bgColor="secondary">
      <Layout>
        <iframe
          src="https://third774.github.io/elm-tic-tac-toe/"
          style={{ height: 600, width: "100%", border: "none" }}
        />
      </Layout>
      <Notes>
        <Note>
          I've been learning a new programming language called "Elm" recently,
          and worked on this basic tic-tac-toe game to help learn the language.
          I picked this as a way to learn a new language because it's not overly
          complicated, but complex enough to present interesting problems.
        </Note>
      </Notes>
    </Slide>
  </SlideSet>
);
