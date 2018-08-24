var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/dashboard', function(req, res, next) {
  res.render('admin/dashboard',{layout:'layout-admin',title:'Welcome to admin dashboard'})
});

module.exports = router;
