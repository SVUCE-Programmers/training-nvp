var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html'});
    //http://localhost:3000/products?pno=1&psize=20&q=apple
    console.log('path: /products');
    console.log('query params: pno=1&psize=20&q=apple');

    var url = req.url;
    // url contains 2 pieces
    // ? 
    var urlParts = url.split('?');
    res.write(req.url);
    res.end();
}).listen(3000);