"use strict"

function weird () {
    // height = 50;
    const height = 50;
    return height;
}

console.log(weird());


const funcExpression = function sayHi() {
    console.log("Hi!");
} 

funcExpression();

// No where in scope chain here
// sayHi();

// Block Scope and Functionn Scope
// var -> mutable / No Block scoped
// const -> immutable / Block scoped
// let mutable / Block scoped

// Scoping helps prevent polluting the execution context
// or variable environment

