"use strict";

var _MongoClient = require("./MongoClient");
var COLLECTION = "posts";
module.exports = {
  getPosts: function getPosts(_, res) {
    (0, _MongoClient.client)(function (db) {
      db.collection(COLLECTION).find().toArray(function (err, results) {
        if (!err) {
          res.status(200).send(results);
        }
      });
    });
  },
  insertPost: function insertPost(req, res) {
    (0, _MongoClient.client)(function (db) {
      db.collection(COLLECTION).insertOne(req.body, function (err, results) {
        if (!err) {
          res.status(200).send(results);
        }
      });
    });
  }
};