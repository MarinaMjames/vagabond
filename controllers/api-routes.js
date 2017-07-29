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