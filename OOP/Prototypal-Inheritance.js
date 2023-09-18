// Prototypal Inheritance 
// Object.create()
const elfFunctions = {
    attack () {
        return `Attak with ${this.weapon}`
    }
}

function createElf (name, weapon) {
    let newElf = Object.create(elfFunctions);
    console.log(newElf.__proto__);
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}


const sylphie = createElf("Sylphie", "Wand")
const elisa = createElf("Elisa", "Threads")



console.log("Sylphie: " + sylphie.attack())
console.log("Elisa: " + elisa.attack())




