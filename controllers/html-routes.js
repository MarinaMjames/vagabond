// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("index");
  });
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 37175731b8233460fb3215ea0695b1fe5cd6e106
  app.get("/city/lookup", function(req, res){
    res.render("app");
  });
  app.get("/account", function(req, res){
    res.render("profile");
  });
  app.get("/signup", function(req, res){
    res.render("signup");
  });
>>>>>>> 37175731b8233460fb3215ea0695b1fe5cd6e106
};
