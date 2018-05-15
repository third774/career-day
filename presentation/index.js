import React from "react";
import { Deck, Heading, Slide, Text } from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import preloader from "spectacle/lib/utils/preloader";
import colors from "./colors";
import images from "./images";
import CoolStuffPeopleMake from "./slides/CoolStuffPeopleMake";
import FunSideProjects from "./slides/FunSideProjects";
import LearningResources from "./slides/LearningResources";
import Opening from "./slides/Opening";
import Presenter from "./slides/Presenter";
import WhatIDo from "./slides/WhatIDo";
import WhatILikeAboutIt from "./slides/WhatILikeAboutIt";
import WhatItsLike from "./slides/WhatItsLike";
import WhatYouMightLikeAboutIt from "./slides/WhatYouMightLikeAboutIt";

console.log(CoolStuffPeopleMake);

preloader(images);

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
        contentHeight={800}
        theme={theme}
        progress="number"
      >
        {Opening}
        {Presenter}
        {WhatIDo}
        {WhatItsLike}
        {WhatILikeAboutIt}
        {WhatYouMightLikeAboutIt}
        {FunSideProjects}
        {CoolStuffPeopleMake}
        {LearningResources}
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
      </Deck>
    );
  }
}
