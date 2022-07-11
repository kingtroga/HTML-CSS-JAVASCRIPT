function greet(firstname, lastname, language ) {

    language = language || 'en'; //defualt hack javascripts)

    if (arguments.length === 0)  {
        console.log('Missing parameters!');
        console.log('-------------------');
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('-------------');
}

greet(); 
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'es');