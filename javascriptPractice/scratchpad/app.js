// Function Statement.
function greet(name) {
    console.log('Hello ' + name);
};
greet('John');


// using an Immediately Invoked Function Expression.
var greetFunc = function(name) {
    console.log('Hello ' + name);
}();
