const mockGetAll = jest.fn();

const request = require('supertest');
const { generateManyBook } = require('../src/fakes/book.fake');
const createApp = require('../src/app');

jest.mock(
  '../src/lib/mongo.lib.js',
  () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    jest.fn().mockImplementation(() => ({
      getAll: mockGetAll,
      create: () => {},
      // eslint-disable-next-line comma-dangle
    }))
  // eslint-disable-next-line function-paren-newline
);
describe('Test for hello Books', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return books list', async () => {
      const fakeBooks = generateManyBook(3);
      mockGetAll.mockResolvedValue(fakeBooks);

      const { body } = await request(app).get('/api/v1/books').expect(200);
      // console.log(body);
      expect(body.length).toEqual(fakeBooks.length);

      // request(app)
      //   .get('/api/v1/books')
      //   .expect(200)
      //   .then(({ body }) => {
      //     console.log(body);
      //     expect(body.length).toEqual(fakeBooks.length);
      //   });
    });
  });
});
