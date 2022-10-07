test('test obj', () => {
  const data = { name: 'nico' };
  // data.lastname = 'molina';
  expect(data).toEqual({ name: 'nico' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('boolean', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
});

test('string', () => {
  expect('name').toMatch(/me/);
});

test('list / arrays', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 6];
  expect(numbers).toContain(3);
});
