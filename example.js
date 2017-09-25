var performance = require('./index');
var company = new performance.Client('c7c9794ba7ef0c35767b57cd9bd68f62dcb34f3e72885a91bc019e05d9f8f812');
company.metric('0aa75b1d-2445-4d7c-afac-ff59b3596994').datapoint(new Date()).upsert(20);
