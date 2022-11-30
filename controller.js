'use strict';

let response = require("./res");
let connection = require("./koneksi");
const conn = require("./koneksi");

exports.index = function(req, res) {
    response.ok("Aplikasi REST API sudah berjalan", res);
};


exports.getAllMahasiswa = function(req, res) {
    let _select_ = `
        select * 
        from mahasiswa     
    `;

    connection.query(_select_, function(err, rows, fileds) {
        if (err) {
            connection.log(err);
        }else{
            response.ok(rows, res);
        }
    });
}


exports.getMahasiswa = function(req, res) {
    let _id_ = req.params.id;
    let _select_ = `
        select *
        from mahasiswa
        where id=?
    `;

    connection.query(_select_, _id_, function(err, row, fileds) {
        if (err) {
            connection.log(err);
        }else{
            response.ok(row, res);
        }
    });
}