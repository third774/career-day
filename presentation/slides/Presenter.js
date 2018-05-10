import React from "react";
import { Appear, Heading, Slide, Text } from "spectacle";
import images from "../images";

export default (
  <Slide transition={["fade"]} bgImage={images.seaholmNight} bgDarken={0.6}>
    <Appear>
      <Heading size={3} caps lineHeight={1} textColor="primary">
        Kevin Kipp
      </Heading>
    </Appear>
    <Appear>
      <Text textFont="secondary" textColor="quarternary" bold>
        Front End Software Engineer @ Umbel
      </Text>
    </Appear>
  </Slide>
);
