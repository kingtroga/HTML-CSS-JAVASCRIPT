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