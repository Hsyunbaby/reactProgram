var express = require('express');
var router = express.Router();
module.exports = function(Mdb) {
    router.post('/', function(req, res) {
        console.log('news服务', req.headers.origin, req.body);
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin); //当前服务允许跨域
        Mdb[0].connect(Mdb[2], function(err, client) {
            const db = client.db(Mdb[3]);
            const news = db.collection("data");
            // console.log(news)
            news.find({ "user": req.body.user, "password": req.body.pass }).toArray(function(err, data) {
                if (data.length == 1) {
                    res.send('1')
                } else {
                    res.send('-1')
                }
            });
            // client.close();
        });

    });
    return router;
};