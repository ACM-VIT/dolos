const express = require("express");

const router = express.Router();
const { APIDescription } = require("./../api/TextResponses");

/** defining routes for api module */
router.get("/", (req, res, next) => {
  res.json({
    error: false,
    version: "1.0",
    message: "Server up and running",
  });
});

router.post("/generate", (req, res, next) => {
  res.json({
    error: false,
    data: req.body,
    version: "1.0",
  });
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
