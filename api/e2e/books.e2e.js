const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
const { config } = require('../src/config/index');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for hello Books', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3002);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return books list', async () => {
      const seedData = await database.collection('books').insertMany([
        {
          name: 'book1',
          year: 1998,
          author: 'nicolas',
        },
        {
          name: 'book1',
          year: 1998,
          author: 'nicolas',
        },
      ]);

      const { body } = await request(app).get('/api/v1/books').expect(200);
      expect(body.length).toEqual(seedData.insertedCount);
    });
  });
});
