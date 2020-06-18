import React, { Component } from "react";
import styled from "styled-components";
import { buttonInput } from "../../actions/index";
import { connect } from "react-redux";

const KeyButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: ${props => (props.signed ? 600 : 400)};
  cursor: pointer;
  border: none;
  align-items: center;
  justify-content: center;
  padding: 30px 5px;
  background-color: white;
  color: ${props => (props.signed ? "#FD8C3B" : "black")};
`;

class Button extends Component {
  renderButton = content => {
    // used render method to change color to orange and * to font awesome icon
    switch (content) {
      case "*":
        return (
          <KeyButton
            signed={true}
            onClick={() => this.props.buttonInput(this.props.content)}
          >
            <i className="fas fa-times"></i>
          </KeyButton>
        );
      case "/":
        return (
          <KeyButton
            signed={true}
            onClick={() => this.props.buttonInput(this.props.content)}
          >
            <i className="fas fa-divide"></i>
          </KeyButton>
        );
      case "+":
        return (
          <KeyButton
            signed={true}
            onClick={() => this.props.buttonInput(this.props.content)}
          >
            <i className="fas fa-plus"></i>
          </KeyButton>
        );
      case "-":
        return (
          <KeyButton
            signed={true}
            onClick={() => this.props.buttonInput(this.props.content)}
          >
            <i className="fas fa-minus"></i>
          </KeyButton>
        );
      case "%":
        return (
          <KeyButton
            signed={true}
            onClick={() => this.props.buttonInput(this.props.content)}
          >
            <i className="fas fa-percentage"></i>
          </KeyButton>
        );
      case "=":
        return (
          <KeyButton
            signed={true}
            onClick={() => this.props.buttonInput(this.props.content)}
          >
            <i className="fas fa-equals"></i>
          </KeyButton>
        );
      case "C":
      case "AC":
        return (
          <KeyButton
            signed={true}
            onClick={() => this.props.buttonInput(this.props.content)}
          >
            {this.props.content}
          </KeyButton>
        );
      default:
        return (
          <KeyButton onClick={() => this.props.buttonInput(this.props.content)}>
            {this.props.content}
          </KeyButton>
        );
    }
  };

  render() {
    return this.renderButton(this.props.content);
  }
}

export default connect(null, { buttonInput })(Button);
