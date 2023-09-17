/* Call() Apply() and Bind() */

function sum (a=1, b=1) {
    console.log(a+b);
}

// sum.call()
// sum.apply()

// call and apply invokes the function

const wizard = {
    name: "Merlin",
    health: 50,
    heal (h1, h2) {
        return this.health += h1 + h2;
    } 
}


const archer = {
    name: "Robin Hood",
    health: 30,
}

console.log(wizard.heal(20, 50));

/*
    Burrow heal method from wizard ?
    call and apply can borrow methods
    What the this keyword should be bounded to ? -> call(this obj), apply(this obj)
    will substitute the original this keyword with new object
*/

console.log("1: ", archer.health);
// wizard.heal.call(archer, 50, 40);
// wizard.heal.apply(archer, [50, 40]);
// console.log("2: ", archer.health);


/* Bind */
const healArcher = wizard.heal.bind(archer, 50, 40);
healArcher();
console.log("2: ", archer.health);


/* Function currying */
// predefined arguments through bind

function addFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

const getFullName = addFullName.bind(this, "Roman");

console.log(getFullName("Karki"));

