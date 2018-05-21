import React from "react";
import {
  BlockQuote,
  Cite,
  Notes,
  Quote,
  Slide,
  SlideSet,
  Text
} from "spectacle";
import Greeting from "../components/Greeting";
import InlineText from "../components/InlineText";
import Note from "../components/Note";

export default (
  <SlideSet>
    <Slide transition={["spin"]} bgColor="secondary" textColor="primary">
      <BlockQuote>
        <Quote textSize="64">What does "Front End" mean?</Quote>
        <Cite textSize="44">You</Cite>
      </BlockQuote>

      <Notes>
        <Note>You're probably wondering what "front end" means</Note>
      </Notes>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary">
      <Text lineHeight={1} textFont="secondary" textColor="primary">
        Building interactive{" "}
        <InlineText textColor="tertiary">user interfaces</InlineText> using
        HTML, CSS, and JavaScript. These languages are the building blocks of
        what you see when browsing websites like Facebook or YouTube.
      </Text>
      <Greeting />
    </Slide>
  </SlideSet>
);
