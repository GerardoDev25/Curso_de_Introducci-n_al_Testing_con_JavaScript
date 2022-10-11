const BookService = require('./books.service');

describe('test for booksService', () => {
  let service;

  beforeEach(() => {
    service = new BookService();
  });

  describe('test for getBooks', () => {
    test('should return a book list', async () => {
      const books = await service.getBooks();
      expect(books.length).toBe(2);
    });
  });
});
