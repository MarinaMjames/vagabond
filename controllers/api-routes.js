// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

var router = express.Router();
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new post
  app.post("/signup", function(req, res) {
    console.log(req.body);
    db.User.create(req.body).then(function(dbData) {
      res.redirect("/city");
    });
  });


  // POST route for saving a new post
  app.post("/signin", function(req, res) {
    console.log(req.body);
    db.Login.create(req.body).then(function(dbData) {
      res.redirect("/city");
    });
  });
  // app.get("/city", function(req, res) {
  //   console.log(req.body);
  //   db.User.create(req.body).then(function(dbData) {
  //     res.redirect("/city");
  //   });
  // });

app.post('/app/cities', function(req, res){
  db.City.build({
    city: req.body.city,
    bio: req.body.bio,
    landmark1: req.body.landmark1,
    landmark2: req.body.landmark2,
    landmark3: req.body.landmark3,
    landmark4: req.body.landmark4,
    landmark5: req.body.landmark5,
    landmark6: req.body.landmark6,
    landmark7: req.body.landmark7,
    landmark8: req.body.landmark8,
    landmark9: req.body.landmark9,
    landmark10: req.body.landmark10
  }).then(function(dbData){
    res.json(dbData);
  });
});

// July 5th 2:33
  app.get('/api/cities', function(req, res){
    db.City.findAll({ }).then(function(data){
      var hbsObject = {
       City: data
     }
      res.render("app", hbsObject)
    })
    });  // app.get("/city/lookup", function(req,res){
  //   db.City.findAll({
  //     attributes: {exclude: ['id']}
  //   }).then(function(response){
  //     res.json(resonse);
  //     console.log(response);
  //   });
  // });

  // Delete User Account
  // app.delete("/api/burgers/:id", function(req, res) {
  //   db.User.destroy({
  //     where: {
  //       username: req.body.username
  //     }
  //   }).then(function(dbData) {
  //     res.json(dbData);
  //   });
  // });

};