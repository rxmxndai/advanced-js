console.log("1 ---------------- ");


// gives us undefined -> That is, it is partially hoisted
// only var gets hoisted, not const/let
// console.log(teddy);

var teddy = "bear";
// const teddy = "bear";

sing();
// sing2()

// is wrapped in (), will not be hoisted to acess on top of this line


// function expression - no hoisting
var sing2 = function () {
    console.log("Maaaaaaaah!");
}

// function declaration - hoisted  
function sing() {
    console.log("Booooooo!");
}

// (function sing() {
//     console.log("Booooooo!");
// })

const arr = [4, 5, 3, 1, 2]

let add = (a, b) => a-b

arr.sort(add)

console.log(arr);