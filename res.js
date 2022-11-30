'use strict';

exports.ok = function(values, res) {
    var data = {
        "status": 200,
        "values": values
    };

    console.log(data);
    
    res.json(data);
    res.end();
}

