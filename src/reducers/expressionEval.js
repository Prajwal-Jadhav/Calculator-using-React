export const expressionEval = arr => {
  let expression = arr.flatMap(item => (item === "%" ? ["/", "100"] : item));

  const regex1 = /(\d+[%*/+-]\d+)([%*/+-]\d+\.*\d+)*/g;
  if (expression.length === 1 || expression.length === 0) return [...arr];
  if (!regex1.test(expression.join(""))) return ["ERR"];

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

  return expression;
};
