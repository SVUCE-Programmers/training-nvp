var md5 = require('js-md5');

var text = 'This needs to be encrypted';
var encryptedText = md5(text);

console.log(text + ' --> '+ encryptedText);