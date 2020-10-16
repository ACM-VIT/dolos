/**
 * This file contains test scripts that will test functionality from app.js.
 */
const request = require("supertest");
const app = require("../app");
const database = require("../database");

describe("Ensure that server boots", () => {
  afterAll(async (done) => {
    database.end(() => {
      done();
    });
  });

  it("returns 200 on calling default route", async (done) => {
    const response = await request(app).get("/");
    expect(response.status).toEqual(200);
    done();
  });
});
