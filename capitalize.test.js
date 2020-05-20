import capitalize from './index';

test('Capitalize string', () => {
  expect(capitalize('hello')).toEqual('HELLO');
});