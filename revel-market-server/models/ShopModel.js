var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getShopBy = function getShopBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_shop WHERE shop_name LIKE ('%" + data.keyword + "%') ";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            }else{
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getShopByShopCode = function getShopByShopCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_shop WHERE shop_code = '" + data.shop_code + "' ";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            }else{
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.insertShop = function insertShop(data, last_code) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_shop (shop_code, shop_name, shop_description,shop_address, shop_tel, shop_detail, shop_latitude, shop_longitude , shop_image_name)"
            + " VALUES ('" + last_code + "', "
            + " '" + data.shop_name + "', "
            + " '" + data.shop_description + "', "
            + " '" + data.shop_address + "', "
            + " '" + data.shop_tel + "', "
            + " '" + data.shop_detail + "', "
            + " '" + data.shop_latitude + "', "
            + " '" + data.shop_longitude + "',"
            + " '" + data.shop_image_name + "') ";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            }else{
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.updateShopByShopCode = function updateShopByShopCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_shop "
            + " SET shop_name = '" + data.shop_name + "',"
            + " shop_description = '" + data.shop_description + "',"
            + " shop_address = '" + data.shop_address + "',"
            + " shop_tel = '" + data.shop_tel + "',"
            + " shop_detail = '" + data.shop_detail + "',"
            + " shop_latitude = '" + data.shop_latitude + "',"
            + " shop_longitude = '" + data.shop_longitude + "',"
            + " shop_image_name = '" + data.shop_image_name + "'"
            + " WHERE shop_code = '" + data.shop_code + "'";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            }else{
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.deleteShopByShopCode = function deleteShopByShopCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_shop WHERE shop_code = '" + data.shop_code + "' ";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            }else{
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getLastCode = function getLastCode() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT IFNULL(CONCAT('S',LPAD( SUBSTRING(max(shop_code), 2, 5)+1,4,'0')), 'S0001') AS last_code  FROM tb_shop ";

        sql.query(str, function (err, res) {
            if (err) {
                resolve(err);
            }else{
                resolve(res[0].last_code);
            }
        });
    });
}

module.exports = Task;