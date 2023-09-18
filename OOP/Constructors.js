// Prototypal Inheritance 




// Constructor Functions
// function Elf (name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
// }

// Elf.prototype.attack = function () { return `${this.name} attacks with ${this.weapon}` }


// const sylphie = new Elf("Sylphie", "Wand")
// const elisa = new Elf("Elisa", "Threads")

// console.log(elisa.name);

// console.log("Sylphie: " + sylphie.attack())
// console.log("Elisa: " + elisa.attack())




// Using Classes
class Elf {
    constructor (name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack () {
        return `${this.name} attacks with ${this.weapon}`
    }
}


const sylphie = new Elf("Sylphie", "Wand")
const elisa = new Elf("Elisa", "Threads")

console.log("Sylphie: " + sylphie.attack())
console.log("Elisa: " + elisa.attack())

console.log(sylphie instanceof Elf);















// Deep inside of the prototype inheritance of functional objects
// const Elf1 = new Function("name", "weapon", 
//     `this.name = name;
//     this.weapon = weapon;`
// )

// const sarah = new Elf1("Sarah", "Sword")

// console.log(sarah);


