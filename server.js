'use strict';
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const bodyParser  = require('body-parser');

const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

const app         = express();
const PORT        = process.argv[2] || process.env.PORT || 3000;

app.use(logger(isDev ? 'dev' : 'common'));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

app.use('/paint', require('./routes/paint'));
app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'))

app.listen(PORT, () => console.log('server here! listening on', PORT));

app.use((err, req, res, next) => {
  console.error(err, next);
  if (err.password === false) {
    console.log('invalid password');
    res.json({password:false})
  } else {
    console.log('generic error');
    res.status(500).send('Something broked!');
  }
});
