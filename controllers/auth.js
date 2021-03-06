var authController = require('./authcontrollers.js');
 
module.exports = function(app, passport) {
 
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/city',
        failureRedirect: '/signup'
    }));
    app.get('/city',authController.city);
 
}