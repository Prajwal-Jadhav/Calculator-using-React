import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

const config = [
  "AC",
  "C",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "NA",
  "0",
  ".",
  "=",
];

const KeyContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

export default class KeyPad extends Component {
  render() {
    return (
      <KeyContainer>
        {config.map(item => (
          <Button key={uuidv4()} content={item} />
        ))}
      </KeyContainer>
    );
  }
}
