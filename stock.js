const fetch = require('node-fetch');
const stockSymbol = 'GME';
const url = 'https://finance.yahoo.com/quote/';
const fullUrl = url.concat(stockSymbol);

const data = await fetch(fullUrl)

const json = await data.json()
  .then(response => response.json);

console.log(json);