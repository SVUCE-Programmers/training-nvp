var fs = require('fs');
function processData(error, data){
    if(error) console.log(error);
    console.log(data.toString());
}
fs.readFile('input.txt',processData);

console.log('read operation done!!');