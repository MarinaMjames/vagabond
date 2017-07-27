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