var url ='http://localhost:3000/products?pno=1&psize=20&q=apple';
var urlParts = url.split('?');
console.log(urlParts[0]);
console.log(urlParts[1]);

'http://localhost:3000/products';
var startIndex = urlParts[0].lastIndexOf('/');
console.log('start at '+ startIndex);
var endIndex = urlParts[0].length;
console.log('end at '+ endIndex);
var path = urlParts[0].substr(startIndex,endIndex);
console.log('path = '+ path);

var qpArray = urlParts[1].split('&');
for(i=0;i<qpArray.length;i++){
    console.log(qpArray[i]);
}

