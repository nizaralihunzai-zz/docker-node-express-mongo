const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./src/routes/index.js');

const app = express();

app.set('view engine', 'ejs');
// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount api routes
app.use('/', routes);


  // Connect to MongoDB
  mongoose
  .connect(
      'mongodb://mongo:27017/trade-shift',
      { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDBv Connected to trade-shift container'))
    .catch(err => console.log(err));


  const port = 3000;

  app.listen(port, () => console.log('Server running...'));

  module.exports = app;