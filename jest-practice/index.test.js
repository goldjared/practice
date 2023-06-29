import { capitalize, reverseString } from './index';

test('first letter should be capital', () => {
  expect(capitalize('test')).toBe('Test');
})

test('string should be reversed', () => {
  expect(reverseString('tester')).toBe('retset');
})