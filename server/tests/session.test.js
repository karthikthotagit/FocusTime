const request = require('supertest');
const app = require('../src/app');

test('Start session', async () => {
  const res = await request(app)
    .post('/api/session/start')
    .send({ userId: 1, duration: 25 });

  expect(res.statusCode).toBe(201);
});
