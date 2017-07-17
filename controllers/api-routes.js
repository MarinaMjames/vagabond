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

  // GET route for getting all of the posts
  app.get("/", function(req, res) {
    // 1. Add a join here to include all of the Authors to these posts
    db.Burger.findAll({}).then(function(dbData) {
      res.json(dbData);
    });
  });

  // Get rotue for retrieving a single post
  app.get("/api/burgers/:id", function(req, res) {
    // 2. Add a join here to include the Author who wrote the Post
    db.Burger.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbData) {
      res.json(dbData);
    });
  });

  // POST route for saving a new post
  app.post("/", function(req, res) {
    db.Burger.create(req.body).then(function(dbData) {
      res.json(dbData);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbData) {
      res.json(dbData);
    });
  });

  // PUT route for updating posts
  app.put("/api/burgers", function(req, res) {
    db.Burger.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbData) {
        res.json(dbData);
      });
  });
};