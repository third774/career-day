import React from "react";
import { Heading, Image, Layout, Notes, Slide, Text } from "spectacle";
import Note from "../components/Note";
import images from "../images";

export default (
  <Slide>
    <Heading fit>What it's like</Heading>
    <Layout>
      <Image margin="24" src={images.coinSort} />
      <Text margin="24" textFont="secondary">
        A coin sorting machine, but with information instead of coins.
      </Text>
    </Layout>
    <Notes>
      <Note>
        Building software is kinda like building a coin sorting machine. The
        difference is that the rails in software are written with code which is
        instructions for the computer. And instead of putting in coins, you are
        putting in information.
      </Note>
    </Notes>
  </Slide>
);
