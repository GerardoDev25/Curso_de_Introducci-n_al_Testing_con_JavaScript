const request = require('supertest');
const createApp = require('../src/app');

describe('Test for hello Endpoint', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /', () => {
    test('should return hello world', async () => {
      const response = await request(app).get('/').expect(200);
      expect(response.text).toBe('Hello World!');
    });
  });
});
