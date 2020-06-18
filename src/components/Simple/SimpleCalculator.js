import React, { Component } from "react";
import styled from "styled-components";
import Display from "./Display";
import KeyPad from "./KeyPad";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  border: 2px solid black;
  width: 450px;
  margin: 100px auto;
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
