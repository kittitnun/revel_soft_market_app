var ShopController = require('../controllers/ShopController');

module.exports = function (app) {
    app.post('/shop/getShopBy', function (req, res) {
        ShopController.getShopBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/shop/getShopByShopCode', function (req, res) {
        ShopController.getShopByShopCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/shop/insertShop', function (req, res) {
        ShopController.insertShop(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/shop/updateShopByShopCode', function (req, res) {
        ShopController.updateShopByShopCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/shop/deleteShopByShopCode', function (req, res) {
        ShopController.deleteShopByShopCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/shop/getLastCode', function (req, res) {
        ShopController.getLastCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}