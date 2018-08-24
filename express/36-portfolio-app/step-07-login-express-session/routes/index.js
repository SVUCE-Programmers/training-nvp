var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Portfolio' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me page' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Page' });
});

/* GET blog page. */
router.get('/blog', function(req, res, next) {
  res.render('blogs', { layout: 'layout-blog', title: 'My blog list' });
});

/* GET blog detail page. */
router.get('/blog/:name', function(req, res, next) {
  res.render('blog-detail', { layout: 'layout-blog', title: 'Blog Detail Page' });
});

/* GET project list page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My project list' });
});

/* GET project detail page. */
router.get('/projects/:project-name', function(req, res, next) {
  res.render('project-detail', { title: 'Project Detail Page' });
});

/* GET my resume pdf. */
router.get('/resume', function(req, res, next) {
  // will implement login to send the resume pdf document
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { layout:'layout-login',title: 'Project Detail Page' });
});

/* POST handle login. */
router.post('/login', function(req, res, next) {
  console.log(req.body.email);
  // write your login here for authentication
  // ---
  if(req.body.email && req.body.email !== ''){
    req.session.isLoggedIn = true;
    req.session.user = {'email': req.body.email};

    res.locals.session = req.session;

    res.render('profile', {title: 'Project Detail Page' });
  }else{
    res.redirect('/login');
  }
  
});

module.exports = router;
