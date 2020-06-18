export const expressionEval = arr => {
  let expression = arr.flatMap(item => (item === "%" ? ["/", "100"] : item));

  const regex1 = /(\d+[%*/+-]\d+)([%*/+-]\d+\.*\d+)+/g;
  const regex2 = /^(\d+\.*\d+[%*/+-]\d+\.*\d+)$/;
  if (expression.length === 1 || expression.length === 0) return [...arr];
  console.log(expression);
  console.log(expression.join(""));
  if (!regex1.test(expression.join("")) && !regex2.test(expression.join("")))
    return ["ERR"];
  console.log("passed regex test");

  while (true) {
    let index = expression.findIndex(item => item === "/") - 1;
    if (index < 0) break;
    let chunk = expression.splice(index, 3);
    let result = Number(chunk[0]) / Number(chunk[2]);
    expression.splice(index, 0, result);
  }

  while (true) {
    let index = expression.findIndex(item => item === "*") - 1;
    if (index < 0) break;
    let chunk = expression.splice(index, 3);
    let result = Number(chunk[0]) * Number(chunk[2]);
    expression.splice(index, 0, result);
  }

  while (true) {
    let index = expression.findIndex(item => item === "+") - 1;
    if (index < 0) break;
    let chunk = expression.splice(index, 3);
    let result = Number(chunk[0]) + Number(chunk[2]);
    expression.splice(index, 0, result);
  }

  while (true) {
    let index = expression.findIndex(item => item === "-") - 1;
    if (index < 0) break;
    let chunk = expression.splice(index, 3);
    let result = Number(chunk[0]) - Number(chunk[2]);
    expression.splice(index, 0, result);
  }

  return Number.isNaN(expression[0]) ? ["ERR"] : expression;
};
