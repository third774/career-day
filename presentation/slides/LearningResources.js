import React from "react";
import styled from "react-emotion";
import { Heading, List, ListItem, Slide } from "spectacle";
import InlineText from "../components/InlineText";

const Link = styled("a")`
  color: #08d9d6;
`;

export default (
  <Slide transition={["spin"]}>
    <Heading textSize="44">Learning Resources</Heading>
    <List>
      <ListItem textFont="secondary">
        <InlineText textSize="38">
          <Link href="https://grasshopper.codes/" target="_blank">
            Grasshopper
          </Link>
        </InlineText>{" "}
        - a game for iOS and Android phones that teaches basic concepts of
        coding
      </ListItem>
      <ListItem textFont="secondary">
        <InlineText textSize="38">
          <Link href="http://lightbot.com/" target="_blank">
            Lightbot
          </Link>
        </InlineText>{" "}
        - another mobile learn to code game where you control a robot by giving
        it commands
      </ListItem>
      <ListItem textFont="secondary">
        <InlineText textSize="38">
          <Link href="https://codecombat.com/play" target="_blank">
            Code Combat
          </Link>
        </InlineText>{" "}
        - a dungeon role playing game where you control your character with code
      </ListItem>
      <ListItem textFont="secondary">
        <InlineText textSize="38">
          <Link href="https://code.org/learn" target="_blank">
            Code.org
          </Link>
        </InlineText>{" "}
        - learn to code games with drag and drop building blocks
      </ListItem>
    </List>
    <Heading textSize="38">More Advanced</Heading>
    <List>
      <ListItem textFont="secondary">
        <InlineText textSize="38">
          <Link href="https://codepen.io/" target="_blank">
            Codepen
          </Link>
        </InlineText>{" "}
        - a scratchpad for writing HTML/CSS/JavaScript
      </ListItem>
      <ListItem textFont="secondary">
        <InlineText textSize="38">
          <Link
            href="https://www.khanacademy.org/computing/computer-programming"
            target="_blank"
          >
            Khan Academy
          </Link>
        </InlineText>{" "}
        - a more in depth learning resource
      </ListItem>
    </List>
  </Slide>
);
