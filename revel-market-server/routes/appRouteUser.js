var UserController = require('../controllers/UserController');

module.exports = function (app) {

    app.post('/user/getLogin', function (req, res) {    //  Not Controller
        UserController.getLogin(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/user/getUserBy', function (req, res) {
        UserController.getUserBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/user/getUserByUserCode', function (req, res) {
        UserController.getUserByUserCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/user/insertUser', function (req, res) {
        UserController.insertUser(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/user/updateUserByUserCode', function (req, res) {
        UserController.updateUserByUserCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/user/deleteUserByUserCode', function (req, res) {
        UserController.deleteUserByUserCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}