function greet(firstname, lastname, language, ...other ) {

    language = language || 'en'; //defualt hack javascripts)

    if (arguments.length === 0)  {
        console.log('Missing parameters!');
        console.log('-------------------');
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('arg 0: '+ arguments[0]);
    console.log('-------------');
}

greet(); 
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'es');