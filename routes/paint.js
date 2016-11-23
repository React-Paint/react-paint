const paint = require('express').Router();
const db = require('../models/paint');

const sendJSONResp = (req, res) => res.json(res.rows);

paint.route('/')
  .get(db.getAll, sendJSONResp)
  .post(db.addPainting, sendJSONresp);
//
// paint.route('/:ID')
//   .get(getPainting , sendJSONresp);
//   .delete(deletePainting, sendJSONresp);
//   .put(editPainting, sendJSONresp);
//
// paint.route('/:ID/edit')
//   .get(getPainting , sendJSONresp);
//   .post(updatePainting , sendJSONresp);

module.exports = paint;
