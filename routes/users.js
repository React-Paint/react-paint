const express = require('express');
const router = express.Router();
const db = require('../models/user');

// handle all the routes

router.post('/', db.createUser, (req, res) => {
  res.status(200).end();
});

module.exports = router;
