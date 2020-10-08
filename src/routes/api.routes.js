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

/** display api description */
router.get("/info", (req, res, next) => {
  res.send(APIDescription());
});

module.exports = router;
