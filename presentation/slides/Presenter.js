import React from "react";
import { Slide, Heading, Text } from "spectacle";

import images from "../images";

export default (
  <Slide transition={["fade"]} bgImage={images.seaholmNight} bgDarken={0.6}>
    <Heading size={3} caps lineHeight={1} textColor="primary">
      Kevin Kipp
    </Heading>
    <Text textFont="secondary" textColor="quarternary" bold>
      Front End Software Engineer @ Umbel
    </Text>
  </Slide>
);
