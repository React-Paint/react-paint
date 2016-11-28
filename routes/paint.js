const paint = require('express').Router();
const db = require('../models/paint');

const sendJSONResp = (req, res) => res.json(res.rows);
const sendStatus = (req, res) => res.status(200).end();

paint.route('/:id')
  .get(db.getDrawing, sendJSONResp)
  .delete(db.deletePainting, sendJSONResp);

paint.route('/')
  .get(db.getDrawings, sendJSONResp)
  .post(db.addDrawing, sendJSONResp);

//
// paint.route('/:ID/edit')
//   .get(getPainting , sendJSONresp);
//   .post(updatePainting , sendJSONresp);

module.exports = paint;
