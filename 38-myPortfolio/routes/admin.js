var express = require('express');
var router = express.Router();

router.all('/', function(req, res, next){
  res.render('dashboard', { title: 'Admin Dashboard', navContact: 'dashboard'});
});

module.exports = router;
