import React, { Component } from "react";
import styled from "styled-components";
import Display from "./Display";
import KeyPad from "./KeyPad";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  border-radius: 8px;
  overflow: hidden;
  width: 450px;
  margin: 100px auto;
  box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.15);
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
