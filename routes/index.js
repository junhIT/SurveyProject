var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Survey Project' });
});

module.exports = router;

// https://blooming-wave-1484.herokuapp.com/
