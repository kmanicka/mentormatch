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

/* GET home page. */
router.get('/userhome', function(req, res, next) {
  res.render('userhome', { title: 'userhome' });
});

/* GET home page. */
router.get('/userpreference', function(req, res, next) {
  res.render('userpreference', { title: 'userhome' });
});

router.get('/usermentors', function(req, res, next) {
  res.render('usermentors', { title: 'userhome' });
});

router.get('/usermentees', function(req, res, next) {
  res.render('usermentees', { title: 'userhome' });
});


module.exports = router;


