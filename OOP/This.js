// NEW BINDING METHODs (this)

function Person(name,age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Roman", 21)
console.log(person1);



/// Implicit bindings of this
const person2 = {
    name: "Eivor",
    age: 21,
    hi () {
        console.log(`Hi ${this.name}`);
    }
}

// Explicit bindings
const person3 = {
    name: "Basim",
    age: 23,
    hi : function () {
        console.log(`Hi ${this.setTimeout}`);
    }
}



// Arow function 
// Lexical Scope

const person4 = {
    name: "Basim",
    age: 23,
    hi : function () {
        var inner = () => {
            console.log(`Hi ${this.name}`);
        }
        return inner();
    }
}


person4.hi()




// class Human {
//     constructor () {
//         this.name = "Roman Karki";
//         this.languages = ["JavaScript", "TypeScript", "C++"]
//         this.skills = ["NodeJS", "NextJS", "ExpressJS"]
//     }
// }