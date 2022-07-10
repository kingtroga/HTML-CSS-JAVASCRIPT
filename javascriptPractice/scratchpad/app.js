function greet(){
    console.log('hi');
}

greet.language = 'english';

// but wait
console.log(greet);

// it seems we need to find property
console.log(greet.language);