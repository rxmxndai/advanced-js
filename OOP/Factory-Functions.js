// Object Oriented Principle


// Factory functions 
// creates functions for us
// Not memory efficient either
function createElf (name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return `Attak with ${weapon}`
        }
    }
}


const sylphie = createElf("Sylphie", "Wand")
const elisa = createElf("Elisa", "Threads")

// console.log(sylphie.attack())
// console.log(elisa.attack())
