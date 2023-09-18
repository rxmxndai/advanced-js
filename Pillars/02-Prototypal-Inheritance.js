/* PROTOTYPAL INHERITANCE */
// WILL HELP IN UNDERSTANDING OOPs
// INHERITANCE: Object getting acccess to the properties and methods of parent (othe robject)


const arr = [1, 2, 3];
// __proto__ gives the base object it is created from
// Object -> Array -> arr
// console.log(arr.__proto__);


Array.prototype.map = function () {
    let ar = [];
    for (let i=0; i< this.length; i++) {
        ar.push(`${this[i]} *`)
    }
    return ar;
}

// console.log(arr.map());

let dragon = {
    name: "Gojo",
    fire: true,
    fight () {
        return 5;
    },
    sing() {
        if (this.fire) {
            return `I am ${this.name}, The breather of fire.`
        }
    }
}

let lizard = {
    name: "Geto",
    fight () {
        return 1;
    }
} 
// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());

// prototypla inheritance 1
// inheritating all the properties and methods

// bad for performance (referenced in different place of memory)
lizard.__proto__ = dragon;

// console.log(lizard.fight());

// console.log(dragon.isPrototypeOf(lizard));

// prototypla inheritance 2

console.log("All properties: ");
for (let x in lizard) console.log(x);
console.log("Only Own properties: ");
for (let x in lizard) {
    if(lizard.hasOwnProperty(x)) console.log(x);
}


