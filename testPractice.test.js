import workString from './index';

test('Capitalize string', () => {
  expect(workString.capitalize('hello')).toEqual('HELLO');
});

test('Reverse string', () => {
  expect(workString.reverseString('hello')).toEqual('olleh');
});