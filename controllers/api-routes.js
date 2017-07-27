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

// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   db.all(function(data) {
//     var hbsObject = {
//       users: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.post("/signup", function(req, res) {
//   db.create([req.body], function() {
//     res.redirect("/city");
//   });
// });

  // POST route for saving a new post
  app.post("/signup", function(req, res) {
    console.log(req.body);
    db.User.create(req.body).then(function(dbData) {
      res.redirect("/city");
    });
  });

  // // Get rotue for retrieving a single post
  // app.get("/city", function(req, res) {
  //   db.User.findAll({}).then(function(dbData) {
  //     res.render(dbData);
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