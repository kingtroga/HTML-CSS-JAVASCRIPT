function greet(firstname, lastname, language) {
    // what if I didn't always want to pass the language.

    language = language || 'en';

    if (language ==='en') {
        console.log('Hello ' + firstname +  " " + lastname);
    }

    if (language ==='es') {
        console.log('Hola ' + firstname +  " " + lastname);
    }
}

// open approach to function overloading
function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, 'es');
}
greet('John', 'Doe', 'en');
greet('John', 'Doe', 'es');