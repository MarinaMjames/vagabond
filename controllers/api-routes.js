// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // // GET route for getting all of the posts
  // app.get("/", function(req, res) {
  //   // 1. Add a join here to include all of the Authors to these posts
  //   db.User.findAll({}).then(function(dbData) {
  //     res.json(dbData);
  //   });
  // });

  // POST route for saving a new post
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbData) {
      console.log(req.body);
      res.json(dbData);
    });
  });

  // Get rotue for retrieving a single post
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbData) {
      res.json(dbData);
    });
  });

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