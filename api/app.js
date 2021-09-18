const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const config = require('./config/config.js');

console.log(config)

const app = express();

// CORS and Middleware
app.use(helmet())
app.use(cors());
app.use(compression());
app.use(express.json());

app.use(`/${config.api.route}/${config.api.version}/`, require('./routes/media.js'))

module.exports = app;