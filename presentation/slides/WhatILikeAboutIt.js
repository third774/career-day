import React from "react";
import { Appear, Heading, List, ListItem, Slide } from "spectacle";

export default (
  <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      What I like about it
    </Heading>
    <List>
      <Appear>
        <ListItem textFont="secondary">
          It's challenging. Always solving problems.
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textFont="secondary">
          It's rewarding. Always learning.
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textFont="secondary">
          Able to bring app ideas to life
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textFont="secondary">Skills that are in demand</ListItem>
      </Appear>
    </List>
  </Slide>
);
