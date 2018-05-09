import React from "react";
import styled from "react-emotion";
import { Slide, SlideSet, BlockQuote, Quote, Cite, Text } from "spectacle";

const InlineText = styled(Text)`
  display: inline;
`;

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
        I build <InlineText textColor="tertiary">user interfaces</InlineText>{" "}
        using HTML, CSS, and JavaScript. These are the building blocks of what
        you ultimately see when browsing the internet.
      </Text>
    </Slide>
  </SlideSet>
);
