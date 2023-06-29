import capitalize from './index';

test('first letter should be capital', () => {
  expect(capitalize('fuck')).toBe('Fuck');
})