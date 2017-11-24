var mysql = require('mysql');

function createDBConnection() {
    if (!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'xxx',
            user: 'xxx',
            password: 'xxx',
            database: 'xxx'
        }); 
    }

    if (process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: 'xxx',
            user: 'xxx',
            password: 'xxx',
            database: 'xxx_test'
        });
    }
}

module.exports = function () {
    return createDBConnection;
}