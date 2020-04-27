const axios = require('axios');
const cheerio = require('cheerio');
const cron = require('node-cron');

const url = 'https://store.us.asmodee.com/catalogue/blue-moon-city_1952/';

cron.schedule('*/5 * * * * *', () => {
    console.log('BOOP');
})

axios(url)
    //Parses the DOM elements and returns the stock status of the item
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const stockStatus = $('.mod-product-details-submit').text();

        //console.log(stockStatus);
        return stockStatus;
    })
    .then(status => {
        console.log();
    })
    .catch(console.error);

