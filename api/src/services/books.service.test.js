/* eslint-disable comma-dangle */
const { generateManyBook, generateOneBook } = require('../fakes/book.fake');
const BookService = require('./books.service');

const mockGetAll = jest.fn();

jest.mock(
  '../lib/mongo.lib.js',
  () =>
    // eslint-disable-next-line implicit-arrow-linebreak, arrow-body-style
    jest.fn().mockImplementation(() => {
      return {
        // getAll: () => [...fakebooks],
        getAll: mockGetAll,
        create: () => {},
      };
    })
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
      const fakeBooks = generateOneBook();
      mockGetAll.mockResolvedValue(fakeBooks);

      const books = await service.getBooks({});

      // console.log(books);
      expect(books.length).toBe(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a book list 2', async () => {
      const fakeBooks = generateManyBook(4);
      mockGetAll.mockResolvedValue(fakeBooks);

      const books = await service.getBooks({});

      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
