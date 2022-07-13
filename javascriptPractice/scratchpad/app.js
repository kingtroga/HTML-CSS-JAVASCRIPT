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
john.__proto__ = person;

// the for loop reach out and got every property that's not just
// on the object but on the propototype itself.

// what if I didn't want the object to reach out.
// then.
for (var prop in john) {
    
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
    
}