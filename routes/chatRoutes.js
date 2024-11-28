const express = require('express');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/', authMiddleware, (req, res) => {
  res.send('Bienvenido al chat');
});

module.exports = router;
