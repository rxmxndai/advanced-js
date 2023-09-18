class Character {
    constructor (name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack () {
        return `${this.name} attacks with ${this.weapon}`
    }
}


// Sub classing (inherit from parent class)
class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
    }

    attack (cry) {
        return `${this.name} attacks with ${cry}`
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color
    }
    attack () {
        return `${this.name} attacks.`
    }
    makeFort () {
        return `Strongest fort in the world made!`
    }
}



const dolby = new Elf("Doby", "Wand", "House")
const shrek = new Ogre("Shrek", "Staff", "Green")

// console.log(dolby)
// console.log(shrek);
// console.log(shrek.makeFort());
// console.log(shrek.attack());


// console.log(dolby instanceof Elf);
// console.log(shrek instanceof Character);

console.log(dolby.attack("Arghhh!"));