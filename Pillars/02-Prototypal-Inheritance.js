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

console.log(arr.map());
