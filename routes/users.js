const user = require('express').Router();
const db = require('../models/user');

const sendJSONresp = (req,res) => res.json(res.rows);

user.route('/')
  .get(db.getAllUsers, sendJSONresp)
  .post(db.addPainting, (req,res) => res.status(200))

// user.route('/:ID')
//   .get(getPainting , sendJSONresp);
//   .delete(deletePainting, sendJSONresp);
//   .put(editPainting, sendJSONresp);
//
// user.route('/:ID/edit')
//   .get(getPainting , sendJSONresp);
//   .post(updatePainting , sendJSONresp);

module.exports = user;