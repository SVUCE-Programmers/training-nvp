var express = require('express');
var router = express.Router();
var Project = require('../model/projectModel');

router.all('/', function(req, res, next){
  res.render('admin/dashboard', { 
    layout: 'layout-admin', 
    title: 'Admin Dashboard', 
    navDashboard: 'dashboard'
  });
});

router.get('/projects', function(req, res, next){
  Project.find({},function(error, projects){
    if(error)
      console.log(error);
    else{
      res.render('admin/projects', { 
        layout: 'layout-admin', 
        title: 'Admin Dashboard', 
        navProjects: 'project',
        projects: projects
      });
    }
  });
});

router.get('/projects/create', function(req, res, next){
  res.render('admin/project-create', { 
    layout: 'layout-admin', 
    title: 'Admin Dashboard', 
    navProjects: 'project'
  });
});

router.post('/projects/create', function(req, res, next){
  var projectModel = new Project();
  projectModel.name = req.body.name;
  projectModel.description = req.body.description;
  projectModel.id = 10;
  projectModel.comments= [{name:"Manohar",title:"Very nice project"},{name:"Ashu",title:"good project"}];

  projectModel.save(function(err, project){
    res.redirect('/admin/projects');
  });
});

router.get('/projects/:id', function(req, res, next){
  Project.findOne({'id': parseInt(req.params.id)},function(error, project){
    if(error)
      console.log(error);
    else{
      res.render('admin/project-detail', { 
        layout: 'layout-admin', 
        title: 'Admin Dashboard', 
        navProjects: 'project',
        project: project
      });
    }
  });
});

router.post('/projects/:id', function(req, res, next){
  var p = req.body;
  Project.updateOne({'id':parseInt(req.params.id)}, {$set: p}, function(err, project){
    console.log(project);
    res.redirect('/admin/projects');
  });
  // update link
});

router.get('/projects/:id/delete', function(req, res, next){
  Project.deleteOne({'id':parseInt(req.params.id)}, function(err, project){
    console.log(project);
    res.redirect('/admin/projects');
  });
  // update link
});

module.exports = router;
