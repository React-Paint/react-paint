const express = require('express');
const router = express.Router();
const { getAll } = require('../models/paint');

const sendJSONresp = (req,res) => res.json(res.rows);

router.route('/')
  .get(getAll , sendJSONresp);
  .post(addPainting, sendJSONresp);


router.route('/:ID')
  .get(getPainting , sendJSONresp);
  .delete(deletePainting, sendJSONresp);
  .put(editPainting, sendJSONresp);

router.route('/:ID/edit')
  .get(getPainting , sendJSONresp);
  .post(updatePainting , sendJSONresp);



module.exports = router;
