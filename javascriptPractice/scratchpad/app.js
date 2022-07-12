function greet(whattosay) {
    //goes outside the scope chain to find whattosay
    return function(name) {
        console.log(whattosay + ' ' + name);
    };
};

var sayHi = greet('Hi');
sayHi(Tony);