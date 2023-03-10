"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
var _mongodb = require("mongodb");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var uri = process.env.DATABASE_URI;
var DATABASE = "blog";
var _client = new _mongodb.MongoClient(uri);
module.exports = {
  client: function client(callback) {
    _client.connect(function (err, db) {
      if (err || !db) {
        return false;
      }
      callback(db.db(DATABASE));
    });
  }
};