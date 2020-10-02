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

/** display api description */
router.get("/info", (req, res, next) => {
  res.send(APIDescription());
});

module.exports = router;
