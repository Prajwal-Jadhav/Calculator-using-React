import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const DisplayContainer = styled.div`
  min-height: 50px;
  padding: 15px 10px;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  letter-spacing: 1px;
  font-size: 20px;
  background-color: white;
  border-bottom: 1px solid #999696;
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
