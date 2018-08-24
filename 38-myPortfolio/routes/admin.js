var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var client = new Client();

router.all('/', function(req, res, next){
  res.render('admin/dashboard', { 
    layout: 'layout-admin', 
    title: 'Admin Dashboard', 
    navDashboard: 'dashboard'
  });
});

router.get('/projects', function(req, res, next){
  client.get("http://localhost:3030/projects", function (jsonData, response) {
    console.log(jsonData);
    if(jsonData){
      res.render('admin/projects', { 
        layout: 'layout-admin', 
        title: 'Admin Dashboard', 
        navProjects: 'project',
        projects: jsonData.data
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
  var args = {
    data: req.body,
    headers: { "Content-Type": "application/json" }
  };

  client.post("http://localhost:3030/projects", args, function (jsonData, response) {
    console.log(jsonData);
    if(jsonData){
      res.redirect('/admin/projects');
    }
  });
});

router.get('/projects/:id', function(req, res, next){
  client.get("http://localhost:3030/projects/"+ req.params.id, function (jsonData, response) {
    console.log(jsonData);
    if(jsonData){
      res.render('admin/project-detail', { 
        layout: 'layout-admin', 
        title: 'Admin Dashboard', 
        navProjects: 'project',
        project: jsonData.data
      });
    }
  });
});

router.post('/projects/:id', function(req, res, next){
  var args = {
    data: req.body,
    headers: { "Content-Type": "application/json" }
  };

  client.put("http://localhost:3030/projects/"+ req.params.id, args, function (jsonData, response) {
    console.log(jsonData);
    if(jsonData){
      res.redirect('/admin/projects');
    }
  });
});

router.get('/projects/:id/delete', function(req, res, next){
  client.delete("http://localhost:3030/projects/"+ req.params.id, function (jsonData, response) {
    console.log(jsonData);
    if(jsonData){
      res.redirect('/admin/projects');
    }
  });
});

module.exports = router;
