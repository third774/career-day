import React from "react";
import styled from "react-emotion";
import { Heading, Layout, Slide, SlideSet } from "spectacle";

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
    <Slide bgColor="secondary">
      <Heading margin="0 0 24px 0">Image Focus</Heading>
      <Layout>
        <Iframe src="https://image-focus.stackblitz.io/" />
      </Layout>
    </Slide>
    <Slide bgColor="primary">
      <Heading fit margin={24} textColor="quarternary">
        Twitter Christmas Lights
      </Heading>
      <TweetVideo />
    </Slide>
  </SlideSet>
);
