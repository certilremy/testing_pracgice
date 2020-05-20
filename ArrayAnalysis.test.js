import { arrayAnalysis } from './index';


test('find Min', () => {
  expect(arrayAnalysis.analyze([2, 4, 6, 3, 6]).min).toBe(2);
});

test('find Max', () => {
  expect(arrayAnalysis.analyze([2, 4, 6, 3, 6]).max).toBe(6);
});

test('find Average', () => {
  expect(arrayAnalysis.analyze([2, 4, 6, 3, 6]).average).toBe(4.2);
});

test('find Length', () => {
  expect(arrayAnalysis.analyze([2, 4, 6, 3, 6]).length).toBe(5);
});
