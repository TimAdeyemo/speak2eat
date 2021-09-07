require('dotenv').config({ silent: true });
const axios = require("axios");

const getRecipesByKeyword = (query) => {
  var options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {from: '0', size: '10', q: `${query}`},
    headers: {
      'x-rapidapi-host': 'tasty.p.rapidapi.com',
      'x-rapidapi-key': `${process.env.RAPID_KEY}`
    }
  }
  return axios(options);
}

module.exports = {
  getRecipesByKeyword
}
