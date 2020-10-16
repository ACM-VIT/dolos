const express = require("express");

const router = express.Router();

// load api components
const Parser = require("./../api/Parser");
const { APIDescription } = require("./../api/TextResponses");

/** defining routes for api module */
router.get("/", (req, res, next) => {
  res.json({
    error: false,
    version: "1.0",
    message: "Server up and running",
  });
});

// generate data using json sent in request body
router.post("/generate", async (req, res) => {
  const parser = new Parser(req.body);
  const response = await parser.generateData();
  res.json(response);
});

/**
 * @api {get} /info/ Request Short Description of the API
 * @apiName GetInfo
 * @apiGroup Info
 *
 * @apiSuccess {String} short description of api.
 *
 */
router.get("/info", (req, res, next) => {
  res.send(APIDescription());
});

module.exports = router;
