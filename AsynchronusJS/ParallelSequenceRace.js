// Three promises to handle
// 1. Parallel ( 1, 2, 3)
// 2. Sequentially (1 -> 2 -> 3)
// 3. Race ( race between those response -> a will only return as it gets promise resolved first )

const promisify = (item, delay) =>
    new Promise(resolve =>
        setTimeout(() =>
            resolve(item),
            delay)
    )


const a = () => promisify("a", 100)
const b = () => promisify("b", 5000)
const c = () => promisify("c", 3000)

// console.log(a(), b(), c());

async function parallel() {
    const promises = [a(), b(), c()]

    const [output1, output2, output3] = await Promise.all(promises);

    return `Parallel is done: ${output1} ${output2} ${output3}`
}


// parallel().then(console.log)


async function race() {
    const promises = [a(), b(), c()]
    const output = await Promise.race(promises);
    return `Race is done: ${output}`
}   

// race().then(console.log)


async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `Sequence is done: ${output1} ${output2} ${output3}`
}

parallel().then(console.log)
race().then(console.log)
sequence().then(console.log)