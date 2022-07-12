var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {

        var fullname = this.firstname + " " + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log("Argurments: " + lang1 + " " + lang2);
    console.log("-----------");

}

// the bind function returns a new function. It set's up a copy of the 
// function so that whenever it run.  The JavaScript engine decides that 
// the this variable was whatever was passed to the this variable.
var logPersonName = logName.bind(person);
logPersonName('en');


logName.call(person) // Kind works like bind but unlike it. 
// call doesn't create
// a copy of the function it actually executes it. Then decide 
// what the 'this' variable would be.

logName.apply(person, ['en', 'es']); // kinda like call but it wants an array of parameters.


(function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log("Argurments: " + lang1 + " " + lang2);
    console.log("-----------");

}).apply(person, ['es', 'en']);





// function borrowing 
var person2 = {
    firstname: 'Jane',
    lastname:'Doe'
}

console.log(person.getFullName.apply(person2))

// function currying
function multiply(a, b) {
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2); // giving it parameters gives
// it permanent values of the function when the copy is made...
// the first parameter will always be a 2.
// so whatevery you pass will be the second parameter
console.log(multiplyByTwo(5));

// FUNCTION CURRYING: CREATING A Copy of a function but with some preset parameters.
// useful in maths.