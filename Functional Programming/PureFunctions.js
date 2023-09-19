// No side effects
// result is universal to same inputs everytime

const array = [1, 2, 3]

function removeLastItem(arr) {
    const newArr = [].concat(arr)
    newArr.pop()
    return newArr;
}

function multiplyArrBy2 ( arr ) {
    return arr.map(item => item * 2)
}

const arr1 = removeLastItem(array);
const arr2 = multiplyArrBy2(array);
console.log(array);
console.log(arr1);
console.log(arr2);