var greet = 'Hello!';
var greet = 'Hola!';

console.log(greet);

// How to fake Namespaces in JavaScript

var english = {};
var spanish = {};

// the code below won't walk because you can set an undefined to a value 
english.greetings.greet = 'Hello!';
spanish.greet = 'Hola!';

console.log(english.greet);