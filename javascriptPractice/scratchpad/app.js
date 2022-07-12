// Function Statement.
function greet(name) {
    console.log('Hello ' + name);
};
greet('John');


// using an IIFE 
var greetFunc = function(name) {
    console.log('Hello ' + name);
}(); // output will be the function value.



