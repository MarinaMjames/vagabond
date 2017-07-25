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
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/city/lookup", (req, res) => {
    res.render("app");
  });
  app.get("/account", (req, res) => {
    res.render("profile");
  });
  app.get("/signup", (req, res) => {
    res.render("signup");
  });
  app.get("/wishlist", (req, res) => {
    res.render("");
  });
};
