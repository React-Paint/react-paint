const paint = require('express').Router();
const db = require('../models/paint');

const sendJSONResp = (req, res) => res.json(res.rows);
const sendStatus = (req, res) => res.status(200).end();

paint.route('/:id')
  .get(db.getDrawing, sendJSONResp)
  .delete(db.deletePainting, sendStatus);

// /:id targets a particular pantings ID so that they can either delete one painting or edit it
paint.route('/')
  .get(db.getDrawings, sendJSONResp)
  .post(db.addDrawing, sendJSONResp);

// routes that point to the paint model and allow deleting get and post with the following routes

module.exports = paint;
