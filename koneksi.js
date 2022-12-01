var mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_restapi_ipungdev",
});

conn.connect((err) => {
    if (err) throw err;
    console.log("Terhubung ke Mysql");
});

module.exports = conn;