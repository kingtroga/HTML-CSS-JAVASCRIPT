// wethere it's a function statement
function a() {
    console.log(this);
    this.newvariable = 'hello';
}

// or it's a function expression
var b = function() {
     console.log(this);
}

// at that level of the code this will point to the globale object.
a();
console.log(newvariable);

var c = {
    log: function() {
        var self = this; // since this are objects. Self is going to be 
                        // point to the same location in memory as this.
        self.name = 'Updated c object';
        console.log(this);


        // this here points to the global object...
        var setname = function(newname) {
            self.name = newname;
        };
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();
