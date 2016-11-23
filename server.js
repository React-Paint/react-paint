'use strict';
require('dotenv').config({ silent: true });
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const bodyParser  = require('body-parser');

// const paintRouter = require('./models/paint');
// const userRouter  = require('./models/user');

const app         = express();
const PORT        = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());


app.use('/paint', require('./models/paint'));
// app.use('/users', userRouter);

app.listen(PORT, () => console.log('server here! listening on', PORT));

app.use((err, req, res, next) => {
  console.error(err, next);
  res.status(500).send('Something broked!');
});
