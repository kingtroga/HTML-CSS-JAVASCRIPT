// wethere it's a function statement
function a() {
    console.log(this);
    this.newvariable = 'hello';
}

// or it's a function expression
var b = function() {
     console.log(this);
}

// at that level of the code this will point to the globale object.
a();
console.log(newvariable);

var c = {
    name: 'The c object',
    log: function() {
        console.log(this);
    }
}

c.log();
