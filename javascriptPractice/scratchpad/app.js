var greet = 'Hello!';
var greet = 'Hola!';

console.log(greet);

// How to fake Namespaces in JavaScript

var english = {};
var spanish = {};

english.greet = 'Hello!';
spanish.greet = 'Hola!';

console.log(english.greet);