var arr = [
            1, 
            true, 
            {
                name: 'Tony',
                address: '111 Main st.'
            },
            function(name) {
                var greeting = 'Hello';
                console.log(greeting + name);
            }, 
            'hello'
        ];
// What the fuck i'm I sure that Python can do this?
// JavaScript is like python on steriods.


console.log(arr);

// Holy fuck
arr[3](arr[2].name)

