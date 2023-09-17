const b = {
    name: "Jake",
    // the calling object
    say() { console.log(this) }
}

var c = {
    name: "Jake",
    say() {
        // window or global
        return function () { console.log(this); }
    }
}

var a = {
    name: "Jake",
    // returns function
    // but when called with a.say()(); will point to a object
    // lexically scoped 
    say() {
        return () => { console.log(this) }
    }
}

// b.say(); 
a.say()(); 