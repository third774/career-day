import React from "react";
import { Heading, Slide, Text } from "spectacle";
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
      having fun solving problems
    </Text>
  </Slide>
);
