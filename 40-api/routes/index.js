var express = require('express');
var router = express.Router();
var Project = require('../model/projectModel');

router.get('/', function(req, res, next) {
  res.json({status:'welcome to rest api'})
});

router.get('/projects', function(req, res, next){
  Project.find({}, function(err, projects){
    res.json({status: 200, data: projects})
  });
});

router.post('/projects', function(req, res, next){
  var projectModel = new Project();
  projectModel.name = req.body.name;
  projectModel.description = req.body.description;
  projectModel.id = req.body.id;

  projectModel.save(function(err, project){
    res.json({status: 200, data: project})
  });
});

router.get('/projects/:id', function(req, res, next){
  Project.findOne({'id': parseInt(req.params.id)}, function(err, project){
    res.json({status: 200, data: project})
  });
});

router.put('/projects/:id', function(req, res, next){
  Project.updateOne({id: parseInt(req.params.id)},{$set: req.body}, function(err, project){
    res.json({status: 200, data: project})
  });
});

router.delete('/projects/:id', function(req, res, next){
  Project.deleteOne({id: parseInt(req.params.id)}, function(err, project){
    res.json({status: 200, data: project})
  });
});

module.exports = router;
