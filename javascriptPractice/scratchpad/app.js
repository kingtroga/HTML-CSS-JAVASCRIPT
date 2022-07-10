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