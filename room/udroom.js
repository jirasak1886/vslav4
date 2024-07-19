'use strict';

const express = require('express');

const udRoute = express.Router();

const connection = require('../db');

udRoute.put('/users/:uid', function (req, res, next) {

   connection.execute("UPDATE room SET r_building=?, r_nameroom=? WHERE r_id=?",
    [req.body.r_building, req.body.r_nameroom, req.params.uid])
     .then(() => {
       console.log('ok');
    }).catch((err) => {
       console.log(err);
    });

     res.status(200).send('Update Successfully');
});
udRoute.delete('/users/:uid', function (req, res, next) {
    connection.execute("DELETE FROM room WHERE r_id=?;",
     [req.params.uid])
      .then(() => {
        console.log('ok');
     }).catch((err) => {
        console.log(err);
     });
      res.end();
 });
 
 udRoute.use('/', function (req, res, next) {
     res.sendStatus(404);
 })
 module.exports = udRoute;