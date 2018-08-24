var express = require('express');
var router = express.Router();

var myPortfolio = {
	profile: {
		name: 'Manohar Negi',
		description: 'Welcome to my profile page.',
		avatar: '',
		contact: {
			email: 'me@myportfolio.com',
			phone: '+91 9090909090',
			location: 'Bangalore'
		}
	},
	about: {
    description:'Write about content here'
  },
	blogs: [{
		title: 'Hello World',
		description: 'This is my blog for my portfolio',
    content: 'This is my blog for my portfolio',
    tags: 'about, hi'
	},{
		title: 'Introduction to ExpressJS',
		description: 'ExpressJS is a web application development framework for NodeJs',
    content: 'ExpressJS is a web application development framework for NodeJs',
    tags: 'nodejs, express'
	}],
	projects: [{
		title: 'My Portfolio',
		description: 'My portfolio site',
		content: 'My portfolio site which will eventually highlight all my projects and acheivements',
		githubUrl: 'https://github.com/mnegi',
	}],
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Portfolio' , data: myPortfolio});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me page'  , data: myPortfolio});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Page'  , data: myPortfolio});
});

/* GET blog page. */
router.get('/blog', function(req, res, next) {
  res.render('blogs', { layout: 'layout-blog', title: 'My blog list'  , data: myPortfolio});
});

/* GET blog detail page. */
router.get('/blog/:name', function(req, res, next) {
  res.render('blog-detail', { layout: 'layout-blog', title: 'Blog Detail Page'  , data: myPortfolio});
});

/* GET project list page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My project list'  , data: myPortfolio});
});

/* GET project detail page. */
router.get('/projects/:project-name', function(req, res, next) {
  res.render('project-detail', { title: 'Project Detail Page' , data: myPortfolio });
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
  req.checkBody('email', 'Email is required').
      notEmpty().withMessage('Please enter a valid email');
  req.checkBody('password', 'Password is required').notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    var messages = [];
    errors.forEach(function(error) {
        messages.push(error.msg);
    });
    res.render('login', {layout:'layout-login', hasErrors: messages.length > 0,messages: errors});
  }else{
    // lets assume we are have the following list of users
    var users = [
      {email:'manohar@hurreh.com',password:'abcd'},
      {email:'deepa@deepa.com',password:'test'},
      {email:'divyanshi@gmail.com',password:'pqrs'},
      {email:'koustav@gmail.com',password:'mnop'},
    ];

    var found = false;

    for(i=0;i<users.length;i++){
      if(users[i].email === req.body.email &&  users[i].password === req.body.password){
        found = true;
        break;
      }
    }

    if(found){
      req.session.isAuthenticated = true;
      req.session.user = {'email': req.body.email};
      res.locals.session = req.session;
      if(req.session.oldUrl){
        res.redirect('/admin' + req.session.oldUrl);
      }else{
        res.redirect('/')
      }
      //res.render('profile', {title: 'Project Detail Page' });
    }else{
      var messages = [];
      messages.push({msg:'Invalid login credentials'});
      res.render('login', {layout:'layout-login', hasErrors: messages.length > 0,messages: messages});
    }
  }
});

/* GET logout page. */
router.get('/logout', function(req, res, next) {
  req.session.isAuthenticated = false;
  delete req.session.user;
  res.redirect('/');
});

module.exports = router;
