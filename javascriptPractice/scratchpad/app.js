function sayHiLater() {

    var greeting = 'Hi!';

    setTimeout( function() { //CALLBACKS, FIRST CLASS FUNCTION, CLOSURE,
                             // Anonymous functions.

        console.log(greeting);
    }, 3000);

}

sayHiLater();