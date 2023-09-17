// Closure
// Separate storage for data in memory heap
// which is referenced by same function's child / sub functions
// grabage collector cannot destroy data in closure

// Also known as lexical soping


function a () {
    let grandpa = "Ojichan"
    return function b () {
        let father = "Otosan"
        return function c () {
            let son = "Musuko"
            console.log(`${grandpa} > ${father} > ${son}`);
        }
    }
}

const first = a();
const second = first();

// second();


const boo = (str) => (name) => (name2) => console.log(`${str} ${name} ${name2}`);

// will store booStr as long as the js engine is running
// This is closure property
// This allows inner functions to access the outer scope of a function
// By storing the lexiccal scope require afterwards.

const booStr = boo("Hi")
// booStr("Roman")("Boie");


/* Memory Efficiency */

//Here each function call will create the bigArr and fill 10000 elements
const heavyTask= (index) => {
    const bigArr = new Array(10000).fill(1)
    console.log("Array created!");
    return bigArr[index];
}


// More memory effiient code
// Here, It will store the bigArr
const heavyTask2= (index) => {
    const bigArr = new Array(10000).fill(1)
    console.log("Created Again!");
    return function (index) {
        return bigArr[index]
    };
}

const getHeavyTask2 = heavyTask2();

// console.log(getHeavyTask2(1000));


/* Encapsulation in closure */

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++; 
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return "Booom!"
    }

    setInterval(passTime, 1000)

    return {
        totalPeaceTime: totalPeaceTime
    }
}

const ohhNo = makeNuclearButton();
// console.log(ohhNo.totalPeaceTime());



