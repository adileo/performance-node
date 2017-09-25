# performance-node
Performance.VC API wrapper for Node.js

`npm install performancevc --save`

```
var performance = require('performancevc');

var company = new performance.Client('Secret Token');

company.metric('Metric UUID').datapoint(new Date()).upsert(20);

```
