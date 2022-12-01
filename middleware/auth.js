let connection = require("../koneksi");
let mysql = require("mysql");
let md5 = require("md5");
let response = require("../res");
let jwt = require("jsonwebtoken");
let config = require("../config");
let ip = require("ip");


exports.registrasi = function(req, res) {
    let post = {
        username: req.body.username, 
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        tanggal_daftar: new Date(),
    }

    let check_existence_of_email = `
        select * from user where email=?
    `;

    // query = mysql.format(check_existence_of_email, post.email)

    connection.query(check_existence_of_email, post.email, function(err, row) {
        if (err) {
            console.log(err);
        }else{
            if (row.length == 0) {
                let _insert_ = `
                    inserto into user set(username, email, password, role, tanggal_daftar)
                    values(?, ?, ?, ?, ?)
                `;

                let _values_ = [post.username, post.email, post.password, post.role, post.tanggal_daftar];

                connection.query(_insert_, _values_, function(err, row) {
                    if (err) {
                        console.log(err);
                    }else{
                        response.ok("Berhasil menambahkan data user", res);
                    }
                });
            }else{
                response.ok("Email sudah terdaftar, gunakan email lain", res);
            }
        }
    });

}