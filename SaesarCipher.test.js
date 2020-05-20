import { saesarCipher } from './index';

test('Work with single word', () => {
  expect(saesarCipher.cipher('hello', 4)).toEqual('lipps');
});

test('Work with muliple word', () => {
  expect(saesarCipher.cipher('hello, good morning TSE', 3)).toEqual('khoor, jrrg pruqlqj WVH');
});

test('Work with negative number', () => {
  expect(saesarCipher.cipher('good morning', -3)).toEqual('dlla jlokfkd');
});

test('Decrypt the word back', () => {
  expect(saesarCipher.cipher('khoor, jrrg pruqlqj WVH', -3)).toEqual('hello, good morning TSE');
});
