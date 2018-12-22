const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/weather/:lat,:long', 
    (req, res) => { 
                    getWeather(req, res);
                  }
);

function getWeather(req, res) {
    var madeUrl = makeUrl(req);
    console.log(madeUrl);
    request(madeUrl, function(error, response, body) {
        res.send(body);
    })
}

function makeUrl(req) {
    const baseUrl = 'https://api.darksky.net/forecast/';
    const key = '76b159644d4f45df43fb016a5e5c4756/';
    const exclusions = '?&units=us&exclude=minutely,flags,hourly,alerts';
    return baseUrl + key + req.params.lat + ',' + req.params.long + exclusions;
}

module.exports = router;