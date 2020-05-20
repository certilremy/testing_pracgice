import testPractice from './index';

test('Capitalize string', () => {
  expect(testPractice.capitalize('hello')).toEqual('HELLO');
});