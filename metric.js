'use strict';
var request = require('request');
var datapoint = require('./datapoint');
// var moment = require('moment');

// Constructor
function Metric(json, company) {
  for(var key in json) {
    if(json.hasOwnProperty(key)) {
        this[key] = json[key];
    }
  }
  this.company = company;
}

// class methods
Metric.prototype.datapoint = function(date) {
  return new datapoint({date: date}, this);
};

Metric.prototype.datapoints = function() {
  var self = this;


  return new Promise(function (fulfill, reject){
  request.get({
   url: self.company.baseUrl + '/api/datapoint?metric_name='+encodeURI(self.name),
   rejectUnauthorized: self.company.ignoreHttps ? false : true,
   headers: {
      'Authorization' : 'Bearer ' + self.company.apiToken
   },
   method: 'GET',
   agentOptions: self.company.agentOptions
  },
  function (e, r, body) {

      if(e){
        reject(e);
      }else{
        body = JSON.parse(body);
        var datapoints = [];
        body.data.forEach(function(mm){
          datapoints.push(new datapoint(mm, self));
        });
        fulfill(datapoints);
      }
  });
});
  //return new datapoint(date, this);
};

// export the class
module.exports = Metric;
