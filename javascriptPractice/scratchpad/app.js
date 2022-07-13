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
for (var prop in john) {// we can loop against a collection 
    console.log(prop + ': ' + john[prop]);
}