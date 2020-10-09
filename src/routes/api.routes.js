const express = require('express');
const { APIDescription } = require('../api/TextResponses');

const router = express.Router();

/** defining routes for api module */
router.get('/', (req, res) => {
  res.json({
    error: false,
    version: '1.0',
    message: 'Server up and running',
  });
});

router.post('/generate', (req, res) => {
  res.json({
    error: false,
    data: req.body,
    version: '1.0',
  });
});

/** display api description */
router.get('/info', (req, res) => {
  res.send(APIDescription());
});

module.exports = router;
