const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({ silent: true });

const app = require('./controller/app.js');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
