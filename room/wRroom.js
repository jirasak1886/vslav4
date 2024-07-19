'use strict';
const express = require('express');
const crypto = require('crypto');
const wrRoute = express.Router();
const connection = require('../db');
wrRoute.post('/users', function (req, res, next) {
    connection.execute(`
        INSERT INTO room
        (r_id, r_building, r_nameroom)
        VALUES (?, ?, ?);`,
        [
            Date.now(),
            req.body.r_id,
            req.body.r_building,
            req.body.r_nameroom, // Replace with actual value
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
    connection.execute('SELECT * FROM room;')
        .then((result) => {
            var rawData = result[0];
            res.send(JSON.stringify(rawData));
        }).catch((err) => {
            console.log(err);
            res.end();
        });
});
wrRoute.post('/check', function (req, res, next) {
    let mypass = crypto.createHash('md5').update(req.body.r_nameroom).digest("hex");
    connection.execute('SELECT * FROM room WHERE r_building=? AND r_nameroom=?;',
        [req.body.r_building, req.body.r_nameroom])
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