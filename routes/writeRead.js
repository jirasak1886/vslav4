'use strict';
const express = require('express');
const crypto = require('crypto');
const wrRoute = express.Router();
const connection = require('../db');
wrRoute.post('/users', function (req, res, next) {
    connection.execute(`
        INSERT INTO record
        (c_time, c_intime, c_outtime, c_building, c_name, c_phone, c_point, c_consultant)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
        [
            Date.now(),
            req.body.c_time,
            req.body.c_intime,
            req.body.c_outtime,
            req.body.c_building,
            req.body.c_name,
            req.body.c_phone, // Replace with actual value
        ]
    )
    .then(() => {
        console.log('Insert successful');
        res.status(201).send('Insert Successful!');
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error inserting data.');
    });
});


//-----------------------------read--------------------------------------
wrRoute.get('/users', function (req, res, next) {
    connection.execute('SELECT * FROM record;')
        .then((result) => {
            var rawData = result[0];
            res.send(JSON.stringify(rawData));
        }).catch((err) => {
            console.log(err);
            res.end();
        });
});
wrRoute.post('/check', function (req, res, next) {
    let mypass = crypto.createHash('md5').update(req.body.c_phone).digest("hex");
    connection.execute('SELECT * FROM record WHERE c_name=? AND c_phone=?;',
        [req.body.c_name, req.body.c_phone])
        .then((result) => {
            var data = result[0];
            console.log(data);
            if (data.length === 0) {
                res.sendStatus(200);
            } else {
                res.sendStatus(400);
            }
        }).catch((err) => {
            console.log(err);
            res.sendStatus(404);
        });

});
wrRoute.use('/', function (req, res, next) {
    res.sendStatus(404);
});
module.exports = wrRoute;

//exports module(router) จำเป็นมาก/routes