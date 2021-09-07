const express = require('express');
const axios = require("axios");
const bodyParser = require('body-parser');
const { getRecipesByKeyword } = require('./routes');
require('dotenv').config({ silent: true });
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + './../../client/dist'));

app.get('/recipes/:query', async (req, res) => {
  getRecipesByKeyword(req.params.query)
  .then((data) => {
    res.status(201).send(data.data.results);
  })
  .catch((err) => {
    res.status(500).send(err)
  })
});


module.exports = app;
