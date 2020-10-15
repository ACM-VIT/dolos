/**
 * This file contains test scripts that will test functionality from app.js.
 */
const request = require("supertest");
const app = require("../app");

describe("Ensure that server boots", () => {
  it("returns 200 on calling default route", async (done) => {
    const response = await request(app).get("/");
    expect(response.status).toEqual(200);
    done();
  });
});
