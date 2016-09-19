var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {

    var search = req.params.search;
    var searchResults = [];

    fs.readFile('./database.json', 'utf8', function (err, data) {
        if(err) throw err;
        var obj = JSON.parse(data);

        res.json(obj);
    });
});

/* Deprecated - Searching done using SearchPipe
router.get('/:search', function(req, res, next) {

    var search = req.params.search;
    var searchResults = [];

    fs.readFile('./database.json', 'utf8', function (err, data) {
        if(err) throw err;
        var obj = JSON.parse(data);

        for(var i = 0; i < obj.length; i++) {
            var locationName = obj[i].locationName;
            if (locationName.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
                searchResults.push(obj[i]);
                var city = obj[i].city;
            }
        }
        res.json(searchResults);
    });
});
*/

module.exports = router;