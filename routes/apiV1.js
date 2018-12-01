const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/weather/:lat,:long', 
    (req, res) => getWeather(res));

function getWeather(res) {
    var url = 'https://api.darksky.net/forecast/76b159644d4f45df43fb016a5e5c4756/43.7742625,-91.2088829?&units=us&exclude=minutely,flags,hourly,alerts';
    request(url, function(error, response, body) {
        res.send(body);
    })
}

module.exports = router;