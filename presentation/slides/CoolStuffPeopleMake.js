import React from "react";
import { Heading, Layout, Slide, SlideSet, Text } from "spectacle";
import CodePenIframe from "../components/CodePenIframe";

export default (
  <SlideSet>
    <Slide bgColor="secondary">
      <Heading margin="0 0 24px 0" fit>
        Sarah Drasner's Wall-E Animation
      </Heading>
      <Layout>
        <CodePenIframe penId="YZBGNp" user="sdras">
          See the Pen{" "}
          <a href="https://codepen.io/sdras/pen/YZBGNp/">
            Vue-controlled Wall-E
          </a>{" "}
          by Sarah Drasner (<a href="https://codepen.io/sdras">@sdras</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </CodePenIframe>
      </Layout>
    </Slide>
    <Slide bgColor="primary">
      <Heading margin={24} textColor="quarternary">
        Video Music
      </Heading>
      <Layout>
        <CodePenIframe
          src="https://s.codepen.io/jakealbaugh/debug/ZxLKvG"
          penId="ZxLKvG"
          user="ZxLKvG"
        />
      </Layout>
      <Text textSize={14}>
        <a href="https://codepen.io/jakealbaugh/full/ZxLKvG/">
          link to codepen source
        </a>
      </Text>
    </Slide>
  </SlideSet>
);
