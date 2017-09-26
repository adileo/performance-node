'use strict';
var client = require('./company');

// Constructor
function Performance() {
  this.Company = require('./company');
}

// class methods
// Performance.prototype.Client = function(token) {
//   return new client(token);
// };

// export the class
module.exports = new Performance;
