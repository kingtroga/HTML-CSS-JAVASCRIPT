
var greeting = 'Hola';

// IIFE
(function(name) {

    var greeting = 'Hello';
    console.log(greeting + ' ' + name);

}('John')); // IIFE