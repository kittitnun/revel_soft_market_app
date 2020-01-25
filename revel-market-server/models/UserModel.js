var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getLogin = function getLogin(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_user " 
            + " WHERE user_username = " + sql.escape(data.user_username) 
            + " AND user_password = " + sql.escape(data.user_password);
            
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
Task.getUserBy = function getUserBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_user ";
        
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
Task.getUserByUserCode = function getUserByUserCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_user WHERE user_code = '" + data.user_code + "' ";

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
Task.insertUser = function insertUser(data, last_code) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_user (user_code, user_username, user_password, user_name, user_lastname, user_address, user_tel, user_email, user_image)"
            + " VALUES ('" + last_code + "', "
            + " '" + data.user_username + "', "
            + " '" + data.user_password + "', "
            + " '" + data.user_name + "', "
            + " '" + data.user_lastname + "', "
            + " '" + data.user_address + "', "
            + " '" + data.user_tel + "', "
            + " '" + data.user_email + "', "
            + " '" + data.user_image + "') ";

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
Task.updateUserByUserCode = function updateUserByUserCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_user "
            + " SET user_username = '" + data.user_username + "',"
            + " user_password = '" + data.user_password + "',"
            + " user_name = '" + data.user_name + "',"
            + " user_lastname = '" + data.user_lastname + "',"
            + " user_address = '" + data.user_address + "',"
            + " user_tel = '" + data.user_tel + "',"
            + " user_email = '" + data.user_email + "',"
            + " user_image = '" + data.user_image + "'"
            + " WHERE user_code = '" + data.user_code + "'";

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
Task.deleteUserByUserCode = function deleteUserByUserCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_user WHERE user_code = '" + data.user_code + "' ";

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
        var str = "SELECT IFNULL(CONCAT('U',LPAD( SUBSTRING(max(user_code), 2, 5)+1,4,'0')), 'U0001') AS last_code  FROM tb_user ";

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