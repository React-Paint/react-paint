const paint = require('express').Router();
const { getAll } = require('../models/paint');

const sendJSONresp = (req,res) => res.json(res.rows);

paint.route('/')
  .get(getAll, sendJSONresp)

module.exports = paint;
