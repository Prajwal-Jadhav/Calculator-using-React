import React, { Component } from "react";
import styled from "styled-components";
import { buttonInput } from "../../actions/index";
import { connect } from "react-redux";

const KeyButton = styled.button`
  border: 2px solid black;
  align-items: center;
  justify-content: center;
  padding: 10px 5px;
`;

class Button extends Component {
  render() {
    return (
      <KeyButton onClick={() => this.props.buttonInput(this.props.content)}>
        {this.props.content}
      </KeyButton>
    );
  }
}

export default connect(null, { buttonInput })(Button);
