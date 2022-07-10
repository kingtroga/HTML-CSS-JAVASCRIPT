var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
};

console.log(JSON.stringify(objectLiteral));

// How to turn a JSON into a JavaScript Object literal
var jsonValue = JSON.parse('{"firstname": "Mary","isAProgrammer": true}');

console.log(jsonValue);