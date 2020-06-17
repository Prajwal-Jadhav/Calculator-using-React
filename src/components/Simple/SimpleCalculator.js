import React, { Component } from "react";
import styled from "styled-components";
import Display from "./Display";
import KeyPad from "./KeyPad";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: 450px;
  margin: 0px auto;
`;

export default class SimpleCalculator extends Component {
  render() {
    return (
      <Container>
        <Display />
        <KeyPad />
      </Container>
    );
  }
}
