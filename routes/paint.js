const express = require('express');
const router = express.Router();
const { getAll } = require('../models/paint');

const sendJSONresp = (req,res) => res.json(res.rows);

router.route('/')
  .get(sendJSONresp);

module.exports = router;
