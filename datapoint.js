'use strict';
var request = require('request');

// var moment = require('moment');

// Constructor
function Datapoint(json, metric) {
  for(var key in json) {
    if(json.hasOwnProperty(key)) {
        this[key] = json[key];
    }
  }
  if (!(this.date instanceof Date)){
    this.date = new Date(this.date);
  }
  //console.log(this.date);
  this.metric = metric;
}

// class methods
Datapoint.prototype.upsert = function(value) {
  var params = {
    'metric_name': this.metric.name,
    'date': this.date.toISOString(),
    'value': value,
    'operation': 'upsert',
  };
  var self = this;
  return new Promise(function (fulfill, reject){
    request.post({
     url: self.metric.client.baseUrl + '/api/datapoint',
     rejectUnauthorized: self.metric.client.ignoreHttps ? false : true,
     form: params,
     headers: {
        'Authorization' : 'Bearer ' + self.metric.client.apiToken
     },
     method: 'POST'
    },
    function (e, r, body) {
        if(e){
          reject(e);
        }else{
          fulfill(body);
        }

    });
  });

};

Datapoint.prototype.insert = function(value) {
  var params = {
    'metric_name': this.metric.name,
    'date': this.date.toISOString(),
    'value': value,
    'operation': 'insert',
  };
  var self = this;
  return new Promise(function (fulfill, reject){
    request.post({
     url: self.metric.client.baseUrl + '/api/datapoint',
     rejectUnauthorized: self.metric.client.ignoreHttps ? false : true,
     form: params,
     headers: {
        'Authorization' : 'Bearer ' + self.metric.client.apiToken
     },
     method: 'POST'
    },
    function (e, r, body) {
        if(e){
          reject(e);
        }else{
          fulfill(body);
        }

    });
  });

};

Datapoint.prototype.remove = function() {
  var params = {
    'metric_name': this.metric.name,
    'date': this.date.toISOString(),
    'operation': 'remove',
  };
  var self = this;
  return new Promise(function (fulfill, reject){
    request.post({
     url: self.metric.client.baseUrl + '/api/datapoint',
     rejectUnauthorized: self.metric.client.ignoreHttps ? false : true,
     form: params,
     headers: {
        'Authorization' : 'Bearer ' + self.metric.client.apiToken
     },
     method: 'POST'
    },
    function (e, r, body) {
        if(e){
          reject(e);
        }else{
          fulfill(body);
        }

    });
  });

};

Datapoint.prototype.increment = function(value) {
  var params = {
    'metric_name': this.metric.name,
    'date': this.date.toISOString(),
    'value': value,
    'operation': 'increment',
  };
  var self = this;
  return new Promise(function (fulfill, reject){
    request.post({
     url: self.metric.client.baseUrl + '/api/datapoint',
     rejectUnauthorized: self.metric.client.ignoreHttps ? false : true,
     form: params,
     headers: {
        'Authorization' : 'Bearer ' + self.metric.client.apiToken
     },
     method: 'POST'
    },
    function (e, r, body) {
        if(e){
          reject(e);
        }else{
          fulfill(body);
        }

    });
  });

};

Datapoint.prototype.decrement = function(value) {
  var params = {
    'metric_name': this.metric.name,
    'date': this.date.toISOString(),
    'value': value,
    'operation': 'decrement',
  };
  var self = this;
  return new Promise(function (fulfill, reject){
    request.post({
     url: self.metric.client.baseUrl + '/api/datapoint',
     rejectUnauthorized: self.metric.client.ignoreHttps ? false : true,
     form: params,
     headers: {
        'Authorization' : 'Bearer ' + self.metric.client.apiToken
     },
     method: 'POST'
    },
    function (e, r, body) {
        if(e){
          reject(e);
        }else{
          fulfill(body);
        }

    });
  });

};

// export the class
module.exports = Datapoint;
