// this function adds two numbers
const add = (n1, n2) =>  n1 + n2;

const subtract = (n1, n2) => n1 - n2;

const divide = (n1, n2) => {
  if (n === 0){
    throw Error("cannot divide by 0");
  }
  return n1 / n2;
}

export { add, subtract, divde }
