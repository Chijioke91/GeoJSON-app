const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db');

// load env variables
dotenv.config({
  path: './config/config.env'
});

db();

const port = process.env.PORT || 8000;

const app = express();

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser
app.use(express.json());

app.use(cors());

app.use('/api/v1/stores', require('./routes/stores'));

app.listen(
  port,
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${port}`
  )
);
