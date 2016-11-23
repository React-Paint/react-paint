'use strict';

require('dotenv').config({ silent: true });
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const bodyParser  = require('body-parser');

const app         = express();
const PORT        = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

// const paintRouter = require();
// const userRouter = require();
// app.use('/paintings', paintRouter);
// app.use('/users', userRouter);

app.listen(PORT, () => console.log('server here! listening on', PORT));
