import React from "react";
import { Slide, Heading, List, ListItem } from "spectacle";

export default (
  <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      What I like about it
    </Heading>
    <List>
      <ListItem textFont="secondary">
        It's challenging. Always solving problems.
      </ListItem>
      <ListItem textFont="secondary">It's rewarding. Always learning.</ListItem>
      <ListItem textFont="secondary">Able to bring app ideas to life</ListItem>
      <ListItem textFont="secondary">Skills that are in demand</ListItem>
    </List>
  </Slide>
);
