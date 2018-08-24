var express = require('express');
var router = express.Router();
var Project = require('../model/projectModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Protfolio', navIndex: 'index'});
  /*
    checks for layout
    by default: it will render in layout.hbs

    render('name of the view', {})
      by default it goes to view directory configured in app.js
      app.set('views', path.join(__dirname, 'views'));

      object: {}, options
      var obj = { name: 'manohar', age: 20, 'address': 'bangalore' }
      { layout: 'layout name', variable: obj }

  */
});

router.get('/projects', function(req, res, next) {
  Project.find({},function(error, projects){
    if(error)
      console.log(error);
    else{
      res.render('projects', {
        title: 'Projects', 
        navProjects: 'projects', 
        projects: projects
      });
    }
  });
},);

router.get('/projects/:projectId', function(req, res, next){
  Project.findOne({'id': parseInt(req.params.projectId)}, function(error, project){
    if(error)
      console.log(error);
    else{
      res.render('project-detail', { title: project? project.name: '' , project: project});
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
