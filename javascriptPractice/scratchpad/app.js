var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname; // why  the 'this' to prevent the js
                                       // engine from searching outside the curent
                                       // object for the firstname property e.g the global object.
    }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john)