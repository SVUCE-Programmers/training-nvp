var http = require('http');

/*
    1. setting the options (define the server, port and the path)
    2. define a callback function to handle the response
    3. we make the call to the server
    4. req.end 

*/
// Options to be used by request 
var options = {
   host: 'localhost',
   port: '3000',
   path: '/contact.html'  
};

// Callback function is used to deal with response
var callback = function(response){
   // Continuously update stream with data
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // Data received completely.
      console.log(body);
   });
}

// Make a request to the server
var req = http.request(options, callback);
req.end();