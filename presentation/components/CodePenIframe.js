import PropTypes from "prop-types";
import React from "react";

const CodePenIframe = ({ user, penId, children, height, src }) => (
  <iframe
    height="265"
    scrolling="no"
    title="Vue-controlled Wall-E"
    src={
      src
        ? src
        : `//codepen.io/${user}/embed/${penId}/?height=600&theme-id=0&embed-version=2`
    }
    frameBorder="no"
    allowtransparency="true"
    allowfullscreen="true"
    allow="camera"
    style={{ width: "100%", height: height || "600px" }}
  >
    {children}
  </iframe>
);

CodePenIframe.propTypes = {
  children: PropTypes.element,
  height: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  penId: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

export default CodePenIframe;
