const promise = new Promise((resolve, reject) => {
    if (true) (
        resolve("Worked")
    )

    reject("Did not go as planned")
})


const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "HIIII")
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "POOKIEE")
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Is it me you are looking for?")
})


// promise.then((result) => result + "!")
// .then(res => res + "|")
// .catch(err => console.log(err))
// .then(res => console.log(res + "?"))


// PROMISEL ALL
// TAKES IN ARRAYS OF PROMISES

// Promise.all([promise, promise2, promise3, promise4])
// .then(values => console.log(values))


/* 
    APIS

    `https://jsonplaceholder.typicode.com/posts`,
    `https://jsonplaceholder.typicode.com/comments`,
    `https://jsonplaceholder.typicode.com/users`

*/

const urls = [
    `https://jsonplaceholder.typicode.com/posts`,
    `https://jsonplaceholder.typicode.com/comments`,
    `https://jsonplaceholder.typicode.com/users`
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
}))
.then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
})
.catch(err => console.log(err))
