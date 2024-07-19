'use strict';

const express = require('express');

const udRoute = express.Router();

const connection = require('../db');

udRoute.put('/users/:uid', function (req, res, next) {

   connection.execute("UPDATE record SET c_name=?, c_phone=? WHERE c_id=?",
    [req.body.c_name, req.body.c_phone, req.params.uid])
     .then(() => {
       console.log('ok');
    }).catch((err) => {
       console.log(err);
    });

     res.status(200).send('Update Successfully');
});
udRoute.delete('/users/:uid', function (req, res, next) {
    connection.execute("DELETE FROM record WHERE c_id=?;",
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