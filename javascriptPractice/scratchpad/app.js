// by value (primitives)
var a = 3;
var b;

b = a;
a = 2;

// by value is an oyo type of situation
console.log(a);
console.log(b);

// by reference (all objects (including functions))
var c = { greeting: 'hi'};
var d;

d = c;
c.greeting = 'hello';//mutate

console.log(d);
console.log(c);

// by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; //mutate
}

changeGreeting(d);
console.log(d);
console.log(c);