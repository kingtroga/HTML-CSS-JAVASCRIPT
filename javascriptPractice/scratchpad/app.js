// Function Statement.
function greet(name) {
    console.log('Hello ' + name);
};
greet('John');


// using an IIFE 
var greetFunc = function(name) {
    console.log('Hello ' + name);
}(); // output will be the function value.

// what will the output be
console.log(greetFunc); // this is holding string not a function If we try
//to invoke it. It would lead to a function.



3; // valid javaScipt expression. You don't always have to store an operation
// in a variable

"This is a string";

{
    name: "I am an object"
};



 
// How we can trick the compiler to think that the following code is a
// a function statement.
// The most accepted way is to put parenthesis infront of  like so
// Note: this is when you want a function expression not the a function 
// statement like you are used to.
// Note: you never put a statement in a parenthesis. It's always an expression
// and since javaScript knows that the code below won't produce errors.

(function(name) {
    console.log('Hello ' + name);
}); 