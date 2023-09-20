// Idempotence:
// Function that always do, what we expect it to do
// Code being predictable

function notGood () {
    return Math.ceil(Math.random() * 10)
}

// console.log(notGood());

/*
    Imperative vs Declarative
    Imperative: Tells machine what and how to do
    Declarative: tells what to do and what should happen
*/


// Declarative
// [1, 2, 3].forEach(item => console.log(item))


// IMPERATIVE
// for (let i=0; i<5; i++) {
//     console.log("*");
// }



// Immutability: Non-changing state / data




// ***************************************************************************


// HOF
// EITHER TAKES IN FUNCTIONS AS ARGUMENTS
// OR RETURNS FUNCTIONS 
const hof = (func) => func(5);

console.log(hof(function (x) { return x }));


// Closures
// Mechanism for functions to store state
// Storing / Accessing functions declared outside the IIFE
const closure = function () {
    let count = 0;
    return function increment() {
        count++;
        return count;
    }
}

const incrementFunc = closure();
console.log(incrementFunc());
console.log(incrementFunc());


// Funcctional Programming

/*
    1. Task
    2. Return statement
    3. Pure
    4. No shared states
    5. Immutable State
    6. Composable
    7. Predictable
*/



