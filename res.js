'use strict';

exports.ok = function(values, res) {
    let data = {
        "status": 200,
        "values": values
    };
    
    res.json(data);
    res.end();
}


exports.oknested = function(values, res) {
    let hasil = values.reduce((akumulasikan, item) => {
        if (akumulasikan[item.nama]) {
            let group = akumulasikan[item.nama];

            if (Array.isArray(group.matakuliah)) {
                group.matakuliah.push(item.matakuliah);
            }else{
                group.matakuliah = [group.matakuliah, item.matakuliah];
            }
        }else{
            akumulasikan[item.nama] = item;
        }

        return akumulasikan;       
    }, {});

    let data = {
        "status": 200,
        "values": hasil
    };
    
    res.json(data);
    res.end();
}

