// Compose
// System design principle that deals with the relationship of components
// Idea: any sort of data transformation that we do must be obvious
// data -> fn -> data -> fn ->

// (-50 * 3 -) multiply and take absolute

const compose = (f, g) => (data) => f(g(data))

// Pipe (same as compose but goes from right to left)
const pipe = (f, g) => (data) => g(f(data))

const multiplyBy3 = (num) => num*3;

const takePositive = (num) => Math.abs(num);

const multiplyBy3andAbsolute = pipe(multiplyBy3, takePositive);

console.log(multiplyBy3andAbsolute(-50));



// Arity
// Number of arguments a function takes
// Arity of 2 = compose(func1, func2)

// lesser the arity -> simpler and easier to use that function







