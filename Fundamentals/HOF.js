// Functions are first class citizens
// Can assign to a variable
// Can be passed as arguments
// Can be returned inside a function

var stuff = function () {}
function a (fnc) {
    fnc()
}

// a(function () {
//     console.log("Check");
// })

function b () {
    return function c() {
        console.log("Nested!");
    }
}


// b()() // or
var t = b();
// t()



/* Higher Order Functions */

// Simply functuions that can take functions as an arguments or
// That will return functions


/* Simple Functions (NO DRY PRINCIPLE IMPLEMENTED) */
function letMeLogin() {
    let array = []
    for (let i=0; i< 10000; i++) {
        array.push(i)
    } 

    return 'Access Granted!'
}

function letHimLogin() {
    let array = []
    for (let i=0; i< 10000; i++) {
        array.push(i)
    } 

    return 'Access Granted!'
}

// console.log(letMeLogin());
// console.log(letHimLogin());


/* FUNCTIONS THAT TAKES IN PARAMETERS */

const giveAccessTo = (username) => `Access Granted to: ${username}`;

function letUserLogin(username) {
    let array = []
    for (let i=0; i< 10000000; i++) {
        array.push(i)
    } 

    return giveAccessTo(username)
}

// console.log(letUserLogin("Dani"));




/* HIGHER ORDER FUNCTIONS */

function authenticate(verify) {
    let array = []
    for (let i=0; i< verify; i++) {
        array.push(i)
    }
    return true;
}

function login(user, callbackFn) {
    if (user.level === "admin") {
        callbackFn(500000)
    }
    else if (user.level === "user") {
        callbackFn(100000)
    }
    return giveAccessTo(user.name);
}

// console.log(login({name: "rxmxndai", level: "user"}, authenticate));




const multiplyBy = num1 => (num2) => num1 * num2;

const multiplyBy2 = multiplyBy(2);
// console.log(multiplyBy2(3));
// console.log(multiplyBy(2)(3));


