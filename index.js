const workString = (() => {
  const capitalize = (string) => string.toUpperCase();

  const reverseString = (string) => string.split('').reverse().join('');

  return { capitalize, reverseString };
})();

const calculator = (() => {
  const add = (num1, num2) => num1 + num2;

  const subtraction = (num1, num2) => num1 - num2;

  const multiply = (num1, num2) => num1 * num2;

  const divide = (num1, num2) => num1 / num2;

  return {
    add, subtraction, multiply, divide,
  };
})();

export { workString, calculator };