'use strict';
var request = require('request');
var metric = require('./metric');
var fs = require('fs');
var path = require('path');
// Constructor
function Company(token) {
  this.apiToken = token;
  this.baseUrl = "https://www.performance.vc";
  this.ignoreHttps = false;
  this.agentOptions= {
        ca: fs.readFileSync('./trusted.pem')
  };
}

// class methods
Company.prototype.metric = function(name) {
  return new metric({name:name}, this);
};

Company.prototype.metrics = function() {
  var self = this;
  return new Promise(function (fulfill, reject){
    request.get({
     url: self.baseUrl + '/api/metric',
     rejectUnauthorized: self.ignoreHttps ? false : true,
     headers: {
        'Authorization' : 'Bearer ' + self.apiToken
     },
     method: 'GET',
     agentOptions: self.agentOptions
    },
    function (e, r, body) {

        if(e){
          reject(e);
        }else{
          body = JSON.parse(body);
          var metrics = [];

          body.data.forEach(function(mm){
            metrics.push(new metric(mm, self));
          });
          fulfill(metrics);
        }
    });
  });

};

// export the class
module.exports = Company;
