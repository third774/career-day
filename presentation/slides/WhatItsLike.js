import React from "react";
import { Heading, Image, Layout, Slide, Text } from "spectacle";
import images from "../images";

export default (
  <Slide>
    <Heading fit>What it's like</Heading>
    <Layout>
      <Image margin="24" src={images.coinSort} />
      <Text margin="24" textFont="secondary">
        Building software is like building a coin sorting machine. The
        difference is that the rails in software are defined with code -
        instructions for the computer. Instead of coins for input, software
        takes in information.
      </Text>
    </Layout>
  </Slide>
);
