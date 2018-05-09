// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import colors from "./colors";

import Opening from "./slides/Opening";
import Presenter from "./slides/Presenter";
import WhatIDo from "./slides/WhatIDo";
import WhatILikeAboutIt from "./slides/WhatILikeAboutIt";

// Require CSS
require("normalize.css");

const fonts = {
  josefinSlab: "Josefin Slab",
  fugazOne: "Fugaz One"
};

const theme = createTheme(colors.speedRacer, {
  primary: fonts.fugazOne,
  secondary: fonts.josefinSlab
});

export default class Presentation extends React.Component {
  componentDidMount() {
    const src = "https://platform.twitter.com/widgets.js";

    const script = document.createElement("script");
    script.async = true;
    script.src = src;

    document.body.appendChild(script);
  }

  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        {Opening}
        {Presenter}
        {WhatIDo}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        {WhatILikeAboutIt}
      </Deck>
    );
  }
}
