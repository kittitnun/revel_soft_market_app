var NewsController = require('../controllers/NewsController');

module.exports = function (app) {
    app.post('/news/getNewsBy', function (req, res) {
        NewsController.getNewsBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/news/getNewsShowBy', function (req, res) {
        NewsController.getNewsShowBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/news/getNewsByNewsCode', function (req, res) {
        NewsController.getNewsByNewsCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/news/insertNews', function (req, res) {
        NewsController.insertNews(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/news/updateNewsByNewsCode', function (req, res) {
        NewsController.updateNewsByNewsCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/news/deleteNewsByNewsCode', function (req, res) {
        NewsController.deleteNewsByNewsCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}