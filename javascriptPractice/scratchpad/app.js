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


