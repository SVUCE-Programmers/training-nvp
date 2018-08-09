var url = require('url');
var address ='http://localhost:3000/products?pno=1&psize=20&q=apple';
var q = url.parse(address,true);

console.log('host: '+ q.host);
console.log('path: '+ q.path);
//console.log('query: '+ q.query);

var query = q.query;
console.log(JSON.stringify(query));
console.log(query.pno);
console.log(query.psize);
console.log(query.q);