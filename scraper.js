const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://store.us.asmodee.com/catalogue/blue-moon-city_1952/';

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const stockStatus = $('.mod-product-details-submit').text();

        console.log(stockStatus);
    })
    .catch(console.error);