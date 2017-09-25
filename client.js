'use strict';
var request = require('request');
var metric = require('./metric');
// Constructor
function Client(token) {
  this.apiToken = token;
  this.baseUrl = "https://127.0.0.1";
  this.ignoreHttps = true;
}

// class methods
Client.prototype.metric = function(name) {
  return new metric(name, this);
};

// export the class
module.exports = Client;
