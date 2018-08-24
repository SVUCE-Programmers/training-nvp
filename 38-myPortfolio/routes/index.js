var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var client = new Client();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Protfolio', navIndex: 'index'});
});

router.get('/projects', function(req, res, next) {
  client.get("http://localhost:3030/projects", function (jsonData, response) {
    console.log(jsonData);
    if(jsonData){
      res.render('projects', {
        title: 'Projects', 
        navProjects: 'projects', 
        projects: jsonData.data
      });
    }
  });
});

router.get('/projects/:projectId', function(req, res, next){
  client.get("http://localhost:3030/projects/" + req.params.projectId, function (jsonData, response) {
    console.log(jsonData);
    if(jsonData){
      res.render('project-detail', {
        title: 'Projects', 
        navProjects: 'projects',
        project: jsonData.data
      });
    }
  });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Blog', navBlog: 'blog'});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', navAbout: 'about'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', navContact: 'contact'});
});

router.post('/contact', function(req, res, next) {
  res.render('confirm', { title: 'Confirm page', navContact: 'contact', data: req.body});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login', navContact: 'contact'});
});

router.post('/login', function(req, res, next){
  // read the inputs
  var email = req.body.email;
  var pass = req.body.password;

  if(email && email != '' && pass && pass != ''){
    // create a session and store some info
    // redirect to dashboard
    console.log(email)
    console.log(pass)
    var user = {email: email, name: 'Maohar'};
    req.session.user = user;
    req.session.isAuthenticated = true;

    res.redirect('/admin')
  }else{
    res.render('login', { title: 'Login', hasError: true, error: 'Invalid login details'});
  }
});


module.exports = router;
