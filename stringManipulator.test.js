import { workString } from './index';

test('Capitalize string', () => {
  expect(workString.capitalize('hello')).toEqual('Hello');
});

test('Return error if empy sring given', () => {
  expect(workString.capitalize('')).toEqual('empty string not allowed!');
});

test('Return error if non sring given', () => {
  expect(workString.capitalize(1)).toEqual('Only string allowed');
});

test('Reverse string', () => {
  expect(workString.reverseString('hello')).toEqual('olleh');
});

test('Return error if empy sring given', () => {
  expect(workString.reverseString('')).toEqual('Empty string not allowed!');
});

test('Return error if non sring given', () => {
  expect(workString.reverseString(1)).toEqual('Only string allowed!');
});