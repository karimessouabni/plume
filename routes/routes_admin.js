/**
 * Created by Thomas on 13/02/2017.
 */
// Routes Admin
module.exports = function(app) {
    var Erreur = require('../crud/beans/Erreur');

    function doesParamExist(param) {
        if (typeof param !== 'undefined' && param) return true;
        return false;
    }
// --- Admin
// Login
// TODO : Yassine
    app.get('/admin', function(req, res) {});

// Services
    app.post('/insererservice', function(req, res) {});
    app.get('/selectservice', function(req, res) {});
    app.get('/selectservices', function(req, res) {});
    app.post('/modifierservice', function(req, res) {});
    app.post('/supprservice', function(req, res) {});


}