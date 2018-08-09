var fs = require("fs");

console.log("Going to create directory /tmp/test");
fs.mkdir('/tmp/test',function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});

/*
    path − This is the directory name including path.
    mode − This is the directory permission to be set. Defaults to 0777.
    callback − This is the callback function No arguments other than a possible exception are given to the completion callback.
*/