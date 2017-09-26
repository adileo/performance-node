'use strict';
var request = require('request');
var metric = require('./metric');
// Constructor
function Client(token) {
  this.apiToken = token;
  this.baseUrl = "http://performance.app";
  this.ignoreHttps = false;
}

// class methods
Client.prototype.metric = function(name) {
  return new metric({name:name}, this);
};

Client.prototype.metrics = function() {
  var self = this;
  return new Promise(function (fulfill, reject){
    request.get({
     url: self.baseUrl + '/api/metric',
     rejectUnauthorized: self.ignoreHttps ? false : true,
     headers: {
        'Authorization' : 'Bearer ' + self.apiToken
     },
     method: 'GET'
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
module.exports = Client;
