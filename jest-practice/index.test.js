import { capitalize, reverseString, calculator } from './index';

test('first letter should be capital', () => {
  expect(capitalize('test')).toBe('Test');
});

test('string should be reversed', () => {
  expect(reverseString('tester')).toBe('retset');
});

test('calc obj should add', () => {
  expect(calculator.add(2,2)).toBe(4)

});

test('calc obj should subtract', () => {
  expect(calculator.subtract(5,2)).toBe(3)
  });

test('calc obj should mult', () => {
  expect(calculator.multiply(100, 4)).toBe(400)
});

test('calc obj should divide', () => {
 expect(calculator.divide(10,2)).toBe(5)
});