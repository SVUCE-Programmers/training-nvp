console.info("Program Started");

var counter = 10;
console.log("Counter: %d", counter);

console.time("Getting data");
//
// Do some processing here...
// 
console.timeEnd('Getting data');

console.info("Program Ended")

/*
Node.js console is a global object and is used to print different levels of messages to stdout and stderr. 
There are built-in methods to be used for printing informational, warning, and error messages.

Methods
-------

console.log([data][, ...])
Prints to stdout with newline. This function can take multiple arguments in a printf()-like way.

console.info([data][, ...])
Prints to stdout with newline. This function can take multiple arguments in a printf()-like way.

console.error([data][, ...])
Prints to stderr with newline. This function can take multiple arguments in a printf()-like way.

console.warn([data][, ...])
Prints to stderr with newline. This function can take multiple arguments in a printf()-like way

console.dir(obj[, options])
Uses util.inspect on obj and prints resulting string to stdout.

console.time(label)
Mark a time.

console.timeEnd(label)
Finish timer, record output.

console.trace(message[, ...])
Print to stderr 'Trace :', followed by the formatted message and stack trace to the current position.

console.assert(value[, message][, ...])
Similar to assert.ok(), but the error message is formatted as util.format(message...).
*/