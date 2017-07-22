var authController = require('./authcontrollers.js');
 
module.exports = function(app) {
 
    app.get('/signup', authController.signup);
    app.get('/index', authController.signin);
 
}