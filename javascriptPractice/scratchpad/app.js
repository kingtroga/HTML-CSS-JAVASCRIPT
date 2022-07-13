var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
// all objects have a reference to a prototype object
john.__proto__ = person;
console.log(john.getFullName());


var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName())