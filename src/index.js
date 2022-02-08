'use strict';
const snoowrap = require('snoowrap');
const axios = require('axios').default;
require('dotenv').config();

/*r.getSubreddit('gifs').submitLink({
  title: 'Mt. Cameramanjaro',
  url: 'https://i.imgur.com/n5iOc72.gifv'
});*/

const r = new snoowrap({
    userAgent: "spunchbob",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});

let data = null;
axios.get(`${process.env.apocAPI}`)
.then(function(response) {
    data = response.data;
    r.getSubreddit('DailyAstronomyPhotos').submitLink({
        title: `${data.title} | ${data.date}, ${data.copyright}`,
        url: `${data.url}`
    });
}).catch(function (error) {
    console.log(error)
});