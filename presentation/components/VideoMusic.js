import React from "react";
import styled from "react-emotion";

const Container = styled("div")`
  section {
    background: #111;
  }

  div.trydebug {
    position: absolute;
    top: 50%;
    left: 50%;
    box-sizing: border-box;
    z-index: 10;
    padding: 4rem;
    width: 400px;
    max-width: 95%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: black;
    color: white;
    text-align: center;
    border: 2px solid tomato;
  }
  div.trydebug a {
    color: tomato;
  }
  div.trydebug.hide {
    display: none;
  }

  section {
    height: 600px;
    width: 300px;
    position: absolute;
    left: calc(50% - 150px);
    top: calc(50% - 300px);
    flex-direction: column;
    display: flex;
    box-shadow: 0px 4px 24px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    overflow: hidden;
  }
  section div,
  section canvas {
    height: 300px;
    width: 300px;
    display: block;
  }
  section div {
    overflow: hidden;
    position: relative;
  }
  section div video {
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: auto;
    height: 100%;
  }
  section canvas {
    -ms-interpolation-mode: nearest-neighbor;
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-pixelated;
    image-rendering: pixelated;
  }

  header {
    position: fixed;
    font-family: system, Helvetica, Arial, sans-serif;
    color: white;
    width: 300px;
    left: calc(50% - 150px);
    top: calc(50% + 310px);
    display: flex;
  }
  header > div {
    flex: 1;
    height: 20px;
    position: relative;
    display: flex;
    border-radius: 4px;
    box-shadow: 0px 4px 24px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  header > div > span {
    flex: 1;
  }
  header > div > span:last-child {
    position: absolute;
    display: block;
    top: 0;
    width: 2px;
    height: 20px;
    background: white;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  footer {
    position: absolute;
    bottom: 0;
    left: 50%;
    box-sizing: border-box;
    width: 100%;
    padding: 12px;
    text-align: center;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    max-width: 600px;
    color: white;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  footer button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
    box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.3);
    background: black;
    color: white;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
  }
  footer button.active {
    background: white;
    color: black;
  }
  footer button:active {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.3);
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  footer button:not(.active) span:last-child,
  footer button.active span:first-child {
    display: none;
  }

  @media (min-width: 600px) {
    section {
      width: 600px;
      height: 300px;
      flex-direction: row;
      left: calc(50% - 300px);
      top: calc(50% - 150px);
    }

    header {
      top: calc(50% + 160px);
      width: 600px;
      left: calc(50% - 300px);
    }
  }
`;

const VideoMusic = () => (
  <Container>
    <header />

    <section>
      <div>
        <video src="" crossorigin="anonymous" autoplay />
      </div>
      <canvas />
    </section>

    <footer>
      <p>
        This makes music and needs access to your camera. The average hue from
        your camera controls which chord will play.
      </p>
      <p>
        <button id="button">
          <span>Start</span>
          <span>Stop</span>
        </button>
      </p>
    </footer>

    <div class="trydebug hide">
      Bummer, you cant load this here. You can open
      <a href="https://codepen.io/jakealbaugh/debug/ZxLKvG" target="blank">
        this page
      </a>{" "}
      in a new window which might fix the problem.
    </div>
  </Container>
);
