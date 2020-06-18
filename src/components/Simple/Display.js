import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const DisplayContainer = styled.div`
  min-height: 70px;
  padding: 15px 10px;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  letter-spacing: 1px;
  font-size: 25px;
  background-color: white;
  border-bottom: 1.5px solid #d7d3d3;
`;

const DisplayItem = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
`;

class Display extends Component {
  renderDisplayItem = item => {
    switch (item) {
      case "*":
        return <i className="fas fa-times"></i>;
      case "/":
        return <i className="fas fa-divide"></i>;
      case "+":
        return <i className="fas fa-plus"></i>;
      case "-":
        return <i className="fas fa-minus"></i>;
      case "%":
        return <i className="fas fa-percentage"></i>;
      default:
        return item;
    }
  };

  render() {
    return (
      <DisplayContainer>
        {this.props.displayArray.map(item => (
          <DisplayItem key={uuidv4()} className="display__item">
            {this.renderDisplayItem(item)}
          </DisplayItem>
        ))}
      </DisplayContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    displayArray: state.displayArray,
  };
};

export default connect(mapStateToProps)(Display);
