import React from "react";
import styled from "react-emotion";
import { Appear, Heading, Slide, Text } from "spectacle";
import colors from "../colors";

const Link = styled("a")`
  color: ${colors.speedRacer.quarternary};
`;

export default (
  <Slide bgColor="secondary">
    <Heading fit>What you might like about it</Heading>
    <Appear>
      <Text textSize={34} textColor="primary" textFont="secondary" margin={24}>
        Aiden Horwitz, a 13-year-old student at Austin Jewish Academy, created{" "}
        <Link href="https://DogDoOrDogDont.org">DogDoOrDogDont.org</Link>, a
        website that tells users which shelter dogs at Austin Pets Alive might
        be right for them. Prospective pet owners can fill out a survey about
        their lives -- the size of their home, the amount of barking they can
        tolerate, how long a future pooch might be home alone each day and more
        -- and receive a score. That score matches the user to a category of dog
        that might be right for them. Horwtiz’s website links to dogs available
        for adoption from Austin Pets Alive under each category.
      </Text>
    </Appear>
    <Appear>
      <Text textSize={20} textColor="quarternary">
        <Link href="https://www.fox23.com/news/trending-now/texas-8thgrader-builds-a-website-matching-people-with-shelter-dogs/745485988">
          Story from Fox 23
        </Link>
      </Text>
    </Appear>
  </Slide>
);
