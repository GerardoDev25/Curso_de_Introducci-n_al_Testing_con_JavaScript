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
      mockGetAll.mockResolvedValue(fakebooks);

      const books = await service.getBooks({});

      // console.log(books);
      expect(books.length).toBe(2);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a book list 2', async () => {
      mockGetAll.mockResolvedValue([
        {
          _id: 1,
          name: 'Harry Potter 2',
        },
      ]);

      const books = await service.getBooks({});

      expect(books[0].name).toEqual('Harry Potter 2');
    });
  });
});
