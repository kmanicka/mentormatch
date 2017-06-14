var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { layout: false });
});

/* GET home page. */
router.get('/mentorjoin', function(req, res, next) {
  res.render('mentorjoin', { title: 'Express' });
});

/* GET home page. */
router.get('/menteejoin', function(req, res, next) {
  res.render('menteejoin', { title: 'Express' });
});

module.exports = router;


