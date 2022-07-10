greet();

// function statement.
function greet(){
    console.log('hi');
}

anonymousGreet();
// what would be the value of the code above via hoisting?

// function statement.
var anonymousGreet = function() {
    console.log('hi');
}

