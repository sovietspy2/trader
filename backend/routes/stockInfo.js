var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");

/* GET home page. */
router.get('/stockInfo/', function (req, res, next) {

    const { id } = req.params;

    fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${id}&token=bvp1jqv48v6s8216hkvg`)
        .then(res => res.json())
        .then(
            (result) => {
                res.send(result)
            },
            (error) => {
                console.error(error);
            }
        );
});

module.exports = router;