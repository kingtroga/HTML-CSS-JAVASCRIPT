// wethere it's a function statement
function a() {
    console.log(this);
}

// or it's a function expression
var b = function() {
     console.log(this);
}

// at that level of the code this will point to the globale object.
a();
