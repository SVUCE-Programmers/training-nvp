var express = require('express');
var router = express.Router();
var projects = [{
  id: 1,
  name: 'test project 1',
  image: '/images/projects/project1.jpg',
  description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  link: '',
  sliders: [{name: 'abcd', url:'/project1.jpg'}]
},{
  id: 2,
  name: 'test project 2',
  image: '/images/projects/project2.jpg',
  description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  link: '',
  sliders: [{name: 'abcd', url:'/project1.jpg'}]
},{
  id: 3,
  name: 'test project 3',
  image: '/images/projects/project3.jpg',
  description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  link: '',
  sliders: [{name: 'abcd', url:'/project1.jpg'}]
},{
  id: 4,
  name: 'test project 4',
  image: '/images/projects/project4.jpg',
  description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  link: '',
  sliders: [{name: 'abcd', url:'/project1.jpg'}]
}];

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
  res.render('projects', { title: 'Projects', navProjects: 'projects', projects: projects});
},);

router.get('/projects/:projectId', function(req, res, next){
  var projectId = req.params.projectId;
  var project;
  for(var i=0; i< projects.length; i++){
    if(projects[i].id == projectId){
      project = projects[i];
      break;
    }
  }
  res.render('project-detail', { title: project? project.name: '' , project: project});
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


module.exports = router;
