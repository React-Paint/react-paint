'use strict'
require('dotenv').config({ silent: true });
const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const bodyParser = require('body-parser');
const app     = express();
const PORT    = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

const apiMovieRouter = require('./routes/api/movies');

app.use('/api', apiMovieRouter);

app.listen(PORT, () => console.log('server here! listening on', PORT));
