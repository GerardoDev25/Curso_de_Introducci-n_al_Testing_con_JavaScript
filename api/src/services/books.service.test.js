/* eslint-disable comma-dangle */
const BookService = require('./books.service');

const fakebooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
  {
    _id: 2,
    name: 'bla blabla',
  },
];

const MongoLib = {
  getAll: () => [...fakebooks],
  create: () => {},
};

jest.mock(
  '../lib/mongo.lib.js',
  () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    jest.fn().mockImplementation(() => MongoLib)
  // eslint-disable-next-line function-paren-newline
);

describe('test for booksService', () => {
  let service;

  beforeEach(() => {
    service = new BookService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a book list', async () => {
      const books = await service.getBooks();
      expect(books.length).toBe(2);
    });
  });
});
