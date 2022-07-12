
var greeting = 'Hola';

// IIFE
(function(global, name) {

    var global.greeting = 'Hello';
    console.log(greeting + ' ' + name);

}(window, 'John')); // IIFE