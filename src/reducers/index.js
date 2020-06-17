import { combineReducers } from "redux";
import { expressionEval } from "./expressionEval";

const calculate = (oldArr, input) => {
  switch (input) {
    case "AC":
      return [];
    case "C":
      return oldArr.slice(0, -1);
    case "=":
      return expressionEval(oldArr);
    case "/":
    case "*":
    case "+":
    case "-":
    case "%":
      return [...oldArr, input];
    default:
      let last = oldArr[oldArr.length - 1];
      if (
        last === "/" ||
        last === "*" ||
        last === "+" ||
        last === "-" ||
        last === "%" ||
        last === undefined
      )
        return [...oldArr, input];
      else {
        last += input;
        return oldArr.slice(0, -1).concat([last]);
      }
  }
};

const displayInputReducer = (oldState = [], action) => {
  switch (action.type) {
    case "BUTTON_INPUT":
      return calculate(oldState, action.payload);
    default:
      return oldState;
  }
};

export default combineReducers({
  displayArray: displayInputReducer,
});
