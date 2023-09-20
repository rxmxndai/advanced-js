// Amazon Shopping | Functional Paradigm

// Implement cart feature
// 1. Add items to cart
// 2. Add 3% tax to each items
// 3. Buy Item: CART -> purchase
// 4. Empty Cart

// Extra: accept refunds / Track user history
const user = {
    name: "Kim So Hung",
    active: true,
    cart: [],
    purchases: []
}

const AmazonHistory = []

const compose = (f, g) => (...args) => f(g(...args))

function purchaseItem(...fns) {
    AmazonHistory.push(user)
    return fns.reduce(compose)
}

function addItemToCart (user, item)  {
    AmazonHistory.push(user)
    const updatedCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updatedCart })
}


function addTaxToItems (user) {
    AmazonHistory.push(user)
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return { ...item, price: item.price * taxRate }
    })
    return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
    AmazonHistory.push(user)
    return Object.assign({}, user, { purchases: user.cart });
}


function emptyCart (user) {
    AmazonHistory.push(user)
    return Object.assign({}, user, { cart: [] });
}

function refundItems () {

}


// const result = purchaseItem(
//     emptyCart,
//     buyItem,
//     addTaxToItems,
//     addItemToCart,
// )(user, { name: "Iphone", price: 1200 });


// console.log(result);
// console.log(AmazonHistory);


// add
function multiply (n) {
    return 2 * n
}

// multiply 
function sum (n) {
    return n + 1
}


const pipe = (func1, func2) => (n) => func1(func2(n)); 

const callPipe = (...funcArray) => {
    return funcArray.reduce(pipe);
}

console.log(callPipe(sum, multiply)(2));



























// function purchaseItemsInCart() {
//    user.purchase = user.cart;
//    user.cart = []
// }

// addToCart(item1)
// addToCart(item2)

// console.log(user);

// purchaseItemsInCart()

// console.log(user);