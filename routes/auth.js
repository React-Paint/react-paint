const express = require('express');
const router = express.Router();
const { findByUsername } = require('../models/user');


router.post('/', findByUsername, (req,res) => {
  console.log('routes user', res.user.username);
  if (res.user.password === req.body.password) {
    res.json(res.user);
  } else {
    res.json({password:false})
  }
})

module.exports = router;
