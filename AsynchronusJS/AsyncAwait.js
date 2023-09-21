// ASYNC AWAIT
const urls = [
    `https://jsonplaceholder.typicode.com/posts`,
    `https://jsonplaceholdertypicode.com/comments`,
    `https://jsonplaceholder.typicode.com/users`
]


async function fetchUsers () {
    try {
        const [posts, comments, users] = await Promise.all(urls.map(url => {
            return fetch(url).then(res => res.json())
        }))
    
        console.log(posts);
        console.log(comments);
        console.log(users);
    }
    catch (err) {
        console.log(err)
    }
} 



fetchUsers();