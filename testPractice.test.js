import * as objTest from './index';

test('Capitalize string', () => {
  expect(objTest.workString.capitalize('hello')).toEqual('HELLO');
});

test('Reverse string', () => {
  expect(objTest.workString.reverseString('hello')).toEqual('olleh');
});

test('add two numbers', () => {
  expect(objTest.calculator.add(2, 2)).toBe(4);
});

test('subtract two numbers', () => {
  expect(objTest.calculator.subtraction(8, 5)).toBe(3);
});

test('multiply two numbers', () => {
  expect(objTest.calculator.multiply(2, 5)).toBe(10);
});

test('divide two numbers', () => {
  expect(objTest.calculator.divide(4, 2)).toBe(2);
});