/**
 * This file contains test scripts that will test functionality from app.js.
 */
const request = require('supertest');
const app = require('../app');

describe('Ensure that server boots', () => {
  let server;

  beforeEach(() => {
    server = app;
  });
  afterEach(() => {
    server.close();
  });

  it('returns 200 on calling default route', (done) => {
    request(server).get('/').expect(200, done);
  });
});
