describe('set', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });

  beforeEach(() => {
    console.log('beforeEach');
  });

  afterAll(() => {
    console.log('afterAll');
  });

  afterEach(() => {
    console.log('afterEach');
  });

  test('case 1', () => {
    expect(1 + 1).toBe(2);
  });

  test('case 1.1', () => {
    expect(1 + 1).toBe(2);
  });
  describe('set', () => {
    test('case 2', () => {
      expect(1 + 2).toBe(3);
    });

    describe('set', () => {
      test('case 3', () => {
        expect(1 + 3).toBe(4);
      });
    });
  });
});
