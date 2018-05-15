import React from "react";
import styled from "react-emotion";
import { Appear, Heading, List, ListItem, Notes, Slide } from "spectacle";

const Note = styled("p")`
  font-family: monospace;
`;

export default (
  <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
    <Heading textColor="secondary" caps fit>
      What I like about it
    </Heading>
    <List>
      <Appear>
        <ListItem textFont="secondary">It's challenging</ListItem>
      </Appear>
      <Appear>
        <ListItem textFont="secondary">It's rewarding</ListItem>
      </Appear>
      <Appear>
        <ListItem textFont="secondary">
          Able to scale solutions to problems
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textFont="secondary">It's okay to be self taught</ListItem>
      </Appear>
    </List>
    <Notes textFont="secondary">
      <div>
        <Note>
          Challenging - when you first start learning, you struggle with errors
          and not understanding what the code is doing. Eventually the time it
          takes to figure those things out gets much smaller, but then your
          focus shifts towards other things. What is the best way to build this
          system? How can I adapt the code I already have to do something
          different?
        </Note>
        <Note>
          Rewarding - it's satisfying and fun. There are highs and lows. Often
          times things are in a broken state. As soon as I solve one problem,
          it's time to move on to the next one. But after struggling for a while
          to get things just right, it feels great.
        </Note>
        <Note>
          Able to scale solutions to problems - being able to solve problems for
          yourself is great, but being able to also solve problems for other
          people that can scale to help thousands, millions, or even billions of
          people is awesome.
        </Note>
        <Note>
          It's okay to be self taught - I didn't graduate from college, and
          software engineering is one of the few high paying and high demand
          professions where you can be self taught. Formal education for it can
          be helpful and worth it though. Either way will have its own
          challenges, but if you are determined, you can do it.
        </Note>
      </div>
    </Notes>
  </Slide>
);
