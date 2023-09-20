// Memoization
// caching


function addTo80(n) {
    return n + 80;
}




function memoizeAddTo80(n) {
    let cache = {}
    return function (n) {
        if (n in cache) {
            return cache[n];
        }
        else {
            console.log("Long time memoization: ");
            cache[n] = n + 80
            return cache[n]
        }
    }
}

const memoized = memoizeAddTo80();

console.log(memoized(20));
console.log(memoized(5));
console.log(memoized(20));
console.log(memoized(5));
