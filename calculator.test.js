import { calculator } from './index';

test('add two numbers', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('subtract two numbers', () => {
  expect(calculator.subtraction(8, 5)).toBe(3);
});

test('multiply two numbers', () => {
  expect(calculator.multiply(2, 5)).toBe(10);
});

test('divide two numbers', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});