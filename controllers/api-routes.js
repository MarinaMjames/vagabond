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

   // Get rotue for retrieving a single post
  app.get("/:city", function(req, res) {
    // 2. Add a join here to include the Author who wrote the Post
    db.City.findOne({
      where: {
        city: req.params.city
      }
    }).then(function (data) {
      var hbsObject = { "city": data };
      res.render('app', hbsObject);
    });
  });

  // app.get("/city", function(req, res) {
  //   // console.log(req.body);
  //   // db.User.create(req.body).then(function(dbData) {
  //   //   res.redirect("/city");
  //   // });
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