const ratioOfTowNum = require("../ratio/index");
const factorialOfNum = require("../factorial/index");

const ratioAndFactorial = (a, b, c) => {
  const ratio = ratioOfTowNum(a, b);
  const factorial = factorialOfNum(c);
  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
