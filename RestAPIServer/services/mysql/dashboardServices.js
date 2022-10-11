const sql = require('./db');


//get  data from databases table
exports.getOrderList = function () {
    return new Promise(resolve => {
        let command = "";
        sql.query(command, (err, rows, fields) => {
            if (!err) {
                resolve(rows);
            }
            else {
                resolve(err);
            }
        })
    });
};
//get  data from databases table
exports.getAvailableProducts = function () {
    return new Promise(resolve => {
        let command = "";
        sql.query(command, (err, rows, fields) => {
            if (!err) {
                resolve(rows);
            }
            else {
                resolve(err);
            }
        })
    });
};
//get  data from databases table
exports.getUserRole = function () {
    return new Promise(resolve => {
        let command = "";
        sql.query(command, (err, rows, fields) => {
            if (!err) {
                resolve(rows);
            }
            else {
                resolve(err);
            }
        })
    });
};
//get  data from databases table
exports.getCustomerOrders = function () {
    return new Promise(resolve => {
        let command = "";
        sql.query(command, (err, rows, fields) => {
            if (!err) {
                resolve(rows);
            }
            else {
                resolve(err);
            }
        })
    });
};
//get  data from databases table
exports.getCustomerpayments = function () {
    return new Promise(resolve => {
        let command = "";
        sql.query(command, (err, rows, fields) => {
            if (!err) {
                resolve(rows);
            }
            else {
                resolve(err);
            }
        })
    });
};
//get  data from databases table
exports.getAllProductDetails = function () {
    return new Promise(resolve => {
        let command = "";
        sql.query(command, (err, rows, fields) => {
            if (!err) {
                resolve(rows);
            }
            else {
                resolve(err);
            }
        })
    });
};
//get  data from databases table
exports.getAll = function () {
    return new Promise(resolve => {
        let command = "";
        sql.query(command, (err, rows, fields) => {
            if (!err) {
                resolve(rows);
            }
            else {
                resolve(err);
            }
        })
    });
};

//============================================================private
//get  data from databases table
exports.updateExistsProductDetails = function () {
    return new Promise(resolve => {
        let command = "";
        sql.query(command, (err, rows, fields) => {
            if (!err) {
                resolve(rows);
            }
            else {
                resolve(err);
            }
        })
    });
};
//get  data from databases table
exports.removeExistsProductfromCategory = function () {
    return new Promise(resolve => {
        let command = "";
        sql.query(command, (err, rows, fields) => {
            if (!err) {
                resolve(rows);
            }
            else {
                resolve(err);
            }
        })
    });
};
//get  data from databases table
exports.orderStatus = function () {
    return new Promise(resolve => {
        let command = "";
        sql.query(command, (err, rows, fields) => {
            if (!err) {
                resolve(rows);
            }
            else {
                resolve(err);
            }
        })
    });
};
//get  data from databases table
exports.getAll = function () {
    return new Promise(resolve => {
        let command = "";
        sql.query(command, (err, rows, fields) => {
            if (!err) {
                resolve(rows);
            }
            else {
                resolve(err);
            }
        })
    });
};