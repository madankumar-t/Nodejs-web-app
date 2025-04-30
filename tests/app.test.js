const request = require('supertest');
const app = require('../index');

test('Should respond with a message', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello, CI/CD Pipeline!');
});