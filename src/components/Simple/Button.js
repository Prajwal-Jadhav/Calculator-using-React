import React, { Component } from "react";
import styled from "styled-components";

const KeyButton = styled.button`
  border: 2px solid black;
  align-items: center;
  justify-content: center;
  padding: 10px 5px;
`;

export default class Button extends Component {
  render() {
    return <KeyButton>{this.props.content}</KeyButton>;
  }
}
