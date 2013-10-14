
module.exports = function(app) {

    // user account page
    app.get('/test', function(req, res) {
        res.render('test/test', { user: req.user });
    });

    // logout
    app.get('/logout', function(req, res) {
        res.redirect('/');
    });
}