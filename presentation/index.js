import React from "react";
import { Deck, Heading, Slide } from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import preloader from "spectacle/lib/utils/preloader";
import colors from "./colors";
import images from "./images";
import FunSideProjects from "./slides/FunSideProjects";
import LearningResources from "./slides/LearningResources";
import Opening from "./slides/Opening";
import Presenter from "./slides/Presenter";
import WhatIDo from "./slides/WhatIDo";
import WhatILikeAboutIt from "./slides/WhatILikeAboutIt";
import WhatItsLike from "./slides/WhatItsLike";
import WhatYouMightLikeAboutIt from "./slides/WhatYouMightLikeAboutIt";

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
        {LearningResources}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading textColor="primary" caps fit>
            Thank you!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
