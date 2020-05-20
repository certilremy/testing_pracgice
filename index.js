/* eslint-disable no-plusplus */
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
    add,
    subtraction,
    multiply,
    divide,
  };
})();

const saesarCipher = (() => {
  const saesar = (str, position) => {
    let code = position % 26;

    if (code < 0) {
      code += 26;
    }

    const sentence = str.split('');

    let cypher = '';

    for (let x = 0; x < sentence.length; x++) {
      let baseWorletter = sentence[x].charCodeAt(0);

      if (baseWorletter > 96 && baseWorletter < 123) {
        baseWorletter += code;

        if (baseWorletter > 122) {
          baseWorletter -= 26;
        }
      }
      if (baseWorletter > 64 && baseWorletter < 91) {
        baseWorletter += code;

        if (baseWorletter > 90) {
          baseWorletter -= 26;
        }
      }
      const caracter = String.fromCharCode(baseWorletter);
      cypher += caracter;
    }
    return cypher;
  };

  return { saesar };
})();
console.log(saesarCipher.saesar('hello', 4));
console.log(saesarCipher.saesar('lipps', -4));

// export { workString, calculator, saesarCipher };
