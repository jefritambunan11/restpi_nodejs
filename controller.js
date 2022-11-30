'use strict';

let response = require("./response");
let connection = require("./koneksi");

exports.index = function(req, res) {
    response.ok("Aplikasi REST API sudah berjalan");
};


