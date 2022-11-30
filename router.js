'use strict';


module.exports = function(app) {
    let controller = require("./controller");

    app.route("/").get(controller.index);
    
    // mahasiswa
    app.route("/mahasiswa").get(controller.getAllMahasiswa);
    app.route("/mahasiswa/:id").get(controller.getMahasiswa);
}