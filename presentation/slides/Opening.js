import React from "react";

import { Slide, Heading, Text } from "spectacle";

import images from "../images";

export default (
  <Slide transition={["fade"]} bgImage={images.code} bgDarken={0.7}>
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Software Engineering
    </Heading>
    <Text
      textFont="secondary"
      margin="10px 0 0"
      textColor="tertiary"
      size={1}
      bold
    >
      a.k.a. having fun solving problems
    </Text>
  </Slide>
);