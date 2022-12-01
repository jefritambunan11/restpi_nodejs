'use strict';

let response = require("./res");
let connection = require("./koneksi");

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


exports.tambahMahasiswa = function(req, res) {   
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    let _insert_ = `
        insert into mahasiswa (nim, nama, jurusan)
        values(?,?,?)
    `;

    let _values_ = [nim, nama, jurusan];

    connection.query(_insert_, _values_, function(err, row, fileds) {
        if (err) {
            connection.log(err);
        }else{
            response.ok("Berhasil Menambahkan Data", res);
        }
    });
}


exports.ubahMahasiswa = function(req, res) {
    let _id_ = req.params.id;
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;
    
    let _update_ = `
        update mahasiswa
        set nim=?, nama=?, jurusan=?        
        where id=?
    `;

    let _values_ = [nim, nama, jurusan, _id_];

    connection.query(_update_, _values_, function(err, row, fileds) {
        if (err) {
            connection.log(err);
        }else{
            response.ok("Berhasil Perbaharui Data", res);
        }
    });
}


exports.hapusMahasiswa = function(req, res) {
    let _id_ = req.params.id;
    
    let _delete_ = `
        delete m
        from mahasiswa m
        where id=?
    `;

    let _values_ = [_id_];

    connection.query(_delete_, _values_, function(err, row, fileds) {
        if (err) {
            connection.log(err);
        }else{
            response.ok("Berhasil Menghapus Data", res);
        }
    });
}


exports.tampilkanGroupMataKuliah = function(req, res) {
    let _select_ = `
        select
            m.id as id_mahasiswa, m.nim, m.nama, m.jurusan,
            mk.matakuliah, mk.sks
        from krs
        join mahasiswa m on m.id = krs.id_mahasiswa
        join matakuliah mk on mk.id = krs.id_mata_kuliah 
        order by m.id
    `;

    connection.query(_select_, function(err, rows, fileds) {
        if (err) {
            connection.log(err);
        }else{
            response.oknested(rows, res);
        }
    });


}