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



 

var firstname = 'John';


(function(name) {

    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);

}(firstname)); // This is a classic example of an IIFE.

// Note an IIFE can be invoked but inside and outside the parenthesis 
// It honestly doesn't really matter.

(function(name) {
    var greeting = 'Oustide IIFE: Hello';
    console.log(greeting + ' ' + name);

})(firstname);

