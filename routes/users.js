const express = require('express');
const router = express.Router();
const db = require('../models/user');

// handle all the routes related to the users. post new users to the users table using users model

router.post('/', db.createUser, (req, res) => {
  res.status(200).end();
});

module.exports = router;
