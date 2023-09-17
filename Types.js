
// -----------------PRIMITIVE TYPES
const numb = 5;
const bool = true;
const str = "My name is GOALO!";
const other = undefined; // || null an object;
// ES6 SYMBOL
const symb = Symbol("Just another datatype.")




// ----------------- NON-PRIMITIVE TYPES
const obj = {
    height: 5.6,
    weight: 62
}
const arrr = [1, 2, 3]

// console.log(typeof function(){} )


//-------------------Functions are objects too
function a () {
    return 555;
}

a.hi = "hihihihihihihi"

// console.log(a.hi);

var arr = [1, 2, 3]
var arr = {
    0: 1,
    1: 2,
    2: 3
}
// console.log(Array.isArray(arr));


// primitive types passed by value
var a = 10;
var b = a

// non-primitive types passed by references
let obj1 = {
    user: "rxmxndai",
    pass: "code"
}

let obj2 = obj1; // points to address of obj1

obj1.pass = "codex"

// console.log("Obj 1: ", obj1);
// console.log("Obj 2: ", obj2);


/* Array pass by ref
    var c = [1, 2, 3, 4, 5]
    var d = c;

    d.push(6)
    console.log("Array C: ", c);
    console.log("Array D: ", d);
*/


/* Array Pass by value */
var c = [1, 2, 3, 4, 5]
var d = [].concat(c);

d.push(6)
// console.log("Array C: ", c);
// console.log("Array D: ", d);



/* Object Pass by value */
let objA = {
    user: "rxmxndai",
    pass: "code",
    deep: {
        message: "Murraaa!"
    }
}

// shallow clone  
let clone = {...objA};
let clone2 = Object.assign({}, objA);
let deepClone = JSON.parse(JSON.stringify(objA))

clone.deep.message = "Urraaahhhh!" 

console.log("Obj A: ", objA);
console.log("Obj Clone: ", clone);
console.log("Obj Clone 2: ", clone2);
console.log("Obj Deep Clone: ", deepClone);







