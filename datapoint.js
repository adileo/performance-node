'use strict';
var request = require('request');

// var moment = require('moment');

// Constructor
function Datapoint(metric, date) {
  this.metric = metric;
  this.date = date;
}

// class methods
Datapoint.prototype.upsert = function(value) {
  //var isoString = date.toISOString();
  //return new datapoint(date);
  //POST
  var params = {
    'metric_id': this.metric.name,
    'date': this.date.toISOString(),
    'value': value,
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
