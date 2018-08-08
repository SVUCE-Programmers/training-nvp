var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
    fs.readFile('index.html', function(error, data){
        if(error){
            res.writeHead(500, { 'Content-Type': 'text/html'});
            res.end('<p>Internal Server Error!</p>');
        }else{
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end(data.toString());
        }
    });
}).listen(3000);