import React from "react";
import { BlockQuote, Cite, Quote, Slide, SlideSet, Text } from "spectacle";
import Greeting from "../components/Greeting";
import InlineText from "../components/InlineText";

export default (
  <SlideSet>
    <Slide transition={["spin"]} bgColor="secondary" textColor="primary">
      <BlockQuote>
        <Quote textSize="64">What does "Front End" mean?</Quote>
        <Cite textSize="44">You</Cite>
      </BlockQuote>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary">
      <Text lineHeight={1} textFont="secondary" textColor="primary">
        It means building interactive{" "}
        <InlineText textColor="tertiary">user interfaces</InlineText> using
        HTML, CSS, and JavaScript. These are the building blocks of what you
        ultimately see when browsing the internet.
      </Text>
      <Greeting />
    </Slide>
  </SlideSet>
);
