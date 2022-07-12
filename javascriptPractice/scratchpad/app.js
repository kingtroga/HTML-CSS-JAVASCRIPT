function makeGreeting(language) {

    return function(firstname, lastname) {
        if (language === 'en') {
            console.log('Hello' + firstname + ' ' + lastname);
        }

        if (language === 'es') {
            console.log('Hola' + firstname + ' ' + lastname);
        }
    }
}

// What do you think is going to happen here?
var greetEnglish = makeGreeting('en'); // well a function with access to variables is returned
var greetSpanish = makeGreeting('es');
// Though these two functions lexically sit in the same make greeting. they
// are going to point at two very different spots in memory because they were
// created during different execution context.

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe'); // Here I have created a function  factories.