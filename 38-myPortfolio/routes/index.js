var express = require('express');
var router = express.Router();

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
  res.render('projects', { title: 'Projects', navProjects: 'projects'});
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

module.exports = router;
