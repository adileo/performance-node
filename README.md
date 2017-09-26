# performance-node
Performance.VC API wrapper for Node.js

`npm install performancevc --save`

```
var performance = require('performancevc');

var company = new performance.Company('cfa2273eca8b5fea74575efc1e2531ee129db71f4a0755767507941e07fc6f5e');

company.metric('Test').datapoint(new Date()).upsert(20).then(function(val){
  console.log(val);
}).catch(function(err){
  console.log(err);
});

company.metric('Test').datapoint(new Date()).remove().then(function(val){
  console.log(val);
}).catch(function(err){
  console.log(err);
});

company.metric('Test').datapoint(new Date()).insert(6).then(function(val){
  console.log(val);
}).catch(function(err){
  console.log(err);
});

company.metric('Test 2').datapoint(new Date()).decrement(5).then(function(val){
  console.log(val);
}).catch(function(err){
  console.log(err);
});

company.metric('Test 3').datapoint(new Date()).increment(5).then(function(val){
  console.log(val);
}).catch(function(err){
  console.log(err);
});


company.metrics().then(function(metrics){
  metrics.forEach(function(metric){
    metric.datapoints().then(function(datapoints){
      console.log(datapoints);
      datapoints.forEach(function(dp){
        dp.upsert(50);
      });
    }).catch(function(err){
      console.log(err);
    });
  });
}).catch(function(err){
  console.log(err);
});


```
