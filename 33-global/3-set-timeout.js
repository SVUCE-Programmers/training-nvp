function printHello(){
    console.log( "Hello, World!");
}
// Now call above function after 2 seconds
setTimeout(printHello, 2000);

/*
The setTimeout(cb, ms) global function is used to run callback cb after at least ms milliseconds.
The actual delay depends on external factors like OS timer granularity and system load. 
A timer cannot span more than 24.8 days.

This function returns an opaque value that represents the timer which can be used to clear the timer.
*/