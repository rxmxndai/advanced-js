console.log("Hello World!");


function jsEngine(str) {
    return str.split(/\s+/)
}

console.log(jsEngine("var a = 5"));


let result = ''

for (let i=0; i<10; i++) {
    result += i+" ";
}

console.log(this); 