import React from "react";
import styled from "react-emotion";
import { Heading, Slide, SlideSet } from "spectacle";

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
          <p lang="en" dir="ltr">
            <a href="https://twitter.com/hashtag/RaspberryPi?src=hash&amp;ref_src=twsrc%5Etfw">
              #RaspberryPi
            </a>{" "}
            and{" "}
            <a href="https://twitter.com/hashtag/Twitter?src=hash&amp;ref_src=twsrc%5Etfw">
              #Twitter
            </a>{" "}
            powered Christmas lights are working! Every time someone tweets
            about{" "}
            <a href="https://twitter.com/hashtag/Christmas?src=hash&amp;ref_src=twsrc%5Etfw">
              #Christmas
            </a>, the lights get brighter! 🎅🎄☃️{" "}
            <a href="https://t.co/GPvRlV5DgW">pic.twitter.com/GPvRlV5DgW</a>
          </p>&mdash; Kevin Kipp (@kevin_kipp){" "}
          <a href="https://twitter.com/kevin_kipp/status/937862576121237504?ref_src=twsrc%5Etfw">
            December 5, 2017
          </a>
        </blockquote>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
      </TweetContainer>
    );
  }
}

export default (
  <SlideSet>
    <Slide bgColor="secondary">
      <Heading>Image Focus</Heading>
      <div style={{ maxWidth: 1200 }}>
        <Iframe src="https://image-focus.stackblitz.io/" />
      </div>
    </Slide>
    <Slide>
      <Heading fit>Twitter Christmas Lights</Heading>
      <TweetVideo />
    </Slide>
  </SlideSet>
);
