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
            news.find({ "user": req.body.user }).toArray(function(err, data) {
                if (data.length == 1) {
                    news.deleteOne({ "user": req.body.user })
                    res.send("1");
                }
                // console.log(data)
                // callback(data);
            });
            // client.close();
        });

    });
    return router;
};