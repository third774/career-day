import React from "react";
import styled from "react-emotion";
import {
  Appear,
  BlockQuote,
  Cite,
  Heading,
  Layout,
  Quote,
  Slide,
  SlideSet,
  Text
} from "spectacle";
import colors from "../colors";
import CodePenIframe from "../components/CodePenIframe";

const Link = styled("a")`
  color: ${colors.speedRacer.quarternary};
`;

export default (
  <SlideSet>
    <Slide>
      <Heading fit>What you might like about it</Heading>
    </Slide>
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
    <Slide bgColor="secondary">
      <Heading fit>Building your own awesome stuff</Heading>
      <Appear>
        <BlockQuote>
          <Quote
            textSize={34}
            textColor="primary"
            textFont="secondary"
            margin={24}
          >
            "Aiden Horwitz, a 13-year-old student at Austin Jewish Academy,
            created{" "}
            <Link href="https://DogDoOrDogDont.org">DogDoOrDogDont.org</Link>, a
            website that tells users which shelter dogs at Austin Pets Alive
            might be right for them. Prospective pet owners can fill out a
            survey about their lives -- the size of their home, the amount of
            barking they can tolerate, how long a future pooch might be home
            alone each day and more -- and receive a score. That score matches
            the user to a category of dog that might be right for them.
            Horwtiz’s website links to dogs available for adoption from Austin
            Pets Alive under each category."
          </Quote>
          <Cite textSize={20} textColor="quarternary">
            <Link href="https://www.fox23.com/news/trending-now/texas-8thgrader-builds-a-website-matching-people-with-shelter-dogs/745485988">
              Story from Fox 23
            </Link>
          </Cite>
        </BlockQuote>
      </Appear>
    </Slide>
  </SlideSet>
);
