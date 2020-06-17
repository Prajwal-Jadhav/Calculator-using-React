import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const DisplayContainer = styled.div`
  width: 100%;
  min-height: 30px;
  padding: 15px 10px;
`;

class Display extends Component {
  render() {
    return (
      <DisplayContainer>{this.props.displayArray.join("  ")}</DisplayContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    displayArray: state.displayArray,
  };
};

export default connect(mapStateToProps)(Display);
