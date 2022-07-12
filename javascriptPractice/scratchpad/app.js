function sayHiLater() {

    var greeting = 'Hi!';

    setTimeout( function() { //CALLBACKS, FIRST CLASS FUNCTION, CLOSURE,
                             // Anonymous functions, Function expressions

        console.log(greeting);
    }, 3000);

}

sayHiLater();

// jQuery uses function expressions and first-class functions!
/* $('button').click(function () {

}); */

function tellMeWhenDone(callback) {
    
    var a = 1000; // some work
    var b = 2000; // some work
    console.log(a, b)
    callback(); // the 'callback', it runs the function I give it.

    
}

tellMeWhenDone(function(){

    console.log('I am done!');

})

tellMeWhenDone(function(){

    console.log('I am done!');

})