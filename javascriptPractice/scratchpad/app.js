function sayHiLater() {

    var greeting = 'Hi!';

    setTimeout( function() { //CALLBACKS, FIRST CLASS FUNCTION, CLOSURE,
                             // Anonymous functions, Function expressions

        console.log(greeting);
    }, 3000);

}

sayHiLater();

// jQuery uses function expressions and first-class functions!
$('button').click(function () {

});