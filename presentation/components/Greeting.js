import React from "react";
import styled, { keyframes } from "react-emotion";
import { Appear, Heading } from "spectacle";

import colors from "../colors";

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Form = styled("form")`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  animation: ${slideIn} 1s ease forwards;
`;

const Label = styled("label")`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  color: ${colors.speedRacer.tertiary};
`;

const Input = styled("input")`
  padding: 4px;
  background-color: inherit;
  border: none;
  font-family: Josefin Slab;
  border-bottom: 2px solid ${colors.speedRacer.primary};
  color: ${colors.speedRacer.quarternary};
  caret-color: ${colors.speedRacer.quarternary};
  &:focus {
    outline: none;
  }
`;

const Button = styled("button")`
  display: none;
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const GreetingDisplay = styled("h2")`
  color: ${colors.speedRacer.quarternary};
  animation: ${bounce} 1s ease forwards;
`;

const defaultState = {
  name: "",
  submitted: false
};

class Greeting extends React.Component {
  state = defaultState;

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });

    setTimeout(() => this.setState(defaultState), 3000);
  };

  handleChange = e => this.setState({ name: e.target.value });

  render() {
    const { submitted, name } = this.state;
    return submitted ? (
      <GreetingDisplay textColor="primary">Hi, {name}!</GreetingDisplay>
    ) : (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          What's your name?
          <Input value={name} onChange={this.handleChange} type="text" />
          <Button type="submit" />
        </Label>
      </Form>
    );
  }
}

export default Greeting;
