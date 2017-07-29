// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require('express-handlebars');
var passport   = require('passport');
var session    = require('express-session');
var env = require('dotenv').load();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions

// Static directory
app.use(express.static("./public"));

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes =============================================================
require("./controllers/html-routes.js")(app);
require("./controllers/api-routes.js")(app);
var authRoute = require('./controllers/auth.js')(app, passport);
	
//load passport strategies

require('./config/passport/passport.js')(passport, db.User);

var Nightmare = require('nightmare');
var nightmare = Nightmare({show:true});

nightmare
  .goto('http://localhost:8080/')
  .click('#newUser')
  
  .type('#first_name', 'Brian')
  .type('#last_name', 'Dolan')
  .type('#email', 'bdolan94@gmail.com')
  .type('#username', 'Bdolan')
  .type('#password', 'IloveMarina')
  .type('#location', 'NJ')
  .type('#age', '23')
  .click('#done')

  .wait()

  
  .screenshot("FILENAME.png")
  
  .wait()

  
  .evaluate(function () {
    return document.querySelector('http://localhost:8080/city').href;
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });

// Syncing our sequelize models and then starting our express app
db.sequelize.sync(
	// { force: true }
	).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


