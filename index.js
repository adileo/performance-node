'use strict';
var client = require('./client');

// Constructor
function Performance() {
  this.Client = require('./client');
}

// class methods
// Performance.prototype.Client = function(token) {
//   return new client(token);
// };

// export the class
module.exports = new Performance;
