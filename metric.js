'use strict';
var request = require('request');
var datapoint = require('./datapoint');
// var moment = require('moment');

// Constructor
function Metric(name, client) {
  this.client = client;
  this.name = name;
}

// class methods
Metric.prototype.datapoint = function(date) {
  return new datapoint(this, date);
};

// export the class
module.exports = Metric;
