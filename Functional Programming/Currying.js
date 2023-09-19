// Currying

const multiplyBy = (a) => (b) => a * b;

// console.log(multiplyBy(2)(4));
// or curried version
const multiplyBy5 = multiplyBy(5)
// console.log(multiplyBy5(2));



// Partial Application
// way to partially apply a function, produce a function with smaller number of parameters

// uses closures to be called with rest arguments

const multiply = (a, b, c) => a * b * c;
const curriedMultiply = (a) => (b) => (c) => a*b*c;

const partialMultiplyBy5x2 = multiply.bind(null, 5, 2);

console.log(partialMultiplyBy5x2(3));