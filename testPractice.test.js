import testPractice from './index';

test('Capitalize string', () => {
  expect(testPractice.capitalize('hello')).toEqual('HELLO');
});

test('Reverse string', () => {
  expect(testPractice.reverseString('hello')).toEqual('olleh');
});