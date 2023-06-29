import capitalize from './index';

test('first letter should be capital', () => {
  expect(capitalize('test')).toBe('Test');
})