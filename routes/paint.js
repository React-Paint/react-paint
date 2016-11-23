const paint = require('express').Router();
const { getAll } = require('../models/paint');

const sendJSONresp = (req,res) => res.json(res.rows);

paint.route('/')
  .get(getAll, sendJSONresp);
//   .post(addPainting, sendJSONresp);
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
