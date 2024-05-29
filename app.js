const numberA = 10;
const numberB = 5;
const operator = "div";

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function operate(numA, numB, op) {
  switch (op) {
    case "add":
      console.log(add(numA, numB));
      break;
    case "sub":
      console.log(sub(numA, numB));
      break;
    case "mul":
      console.log(mul(numA, numB));
      break;
    case "div":
      console.log(div(numA, numB));
      break;
    default:
      console.log("Some Error Occured");
  }
}

operate(numberA, numberB, operator)