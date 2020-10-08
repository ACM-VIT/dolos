/**
 * This file contains test scripts that will test functionality from app.js.
 */
const app = require('../app');

describe('ensure that server boots', () => {
  let server;

  beforeEach(() => {
    server = app;
  });

  afterEach(() => {
    server.close();
  });

  it('returns 200 on calling default route', async () => {
    const response = await server.get('/');
    expect(response).toBe(200);
  });
});
