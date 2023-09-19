// Amazon Shopping

const user = {
    name: "Kim So Hung",
    active: true,
    cart: [],
    purchase: []
}

const item1 = {
    product: "X-Razor",
    price: 200,
}

const item2 = {
    product: "Y-Razor",
    price: 100,
}


const addToCart = function (itemToAdd) {
    let tempPrice = itemToAdd.price;
    itemToAdd.price = tempPrice + ( 13/100 * (tempPrice) )
    user.cart.push(itemToAdd);
}

// Implement cart feature
// 1. Add items to cart
// 2. Add 3% tax to each items
// 3. Buy Item: CART -> purchase
// 4. Empty Cart

// Extra: accept refunds / Track user history





function purchaseItemsInCart() {
   user.purchase = user.cart;
   user.cart = []
}

addToCart(item1)
addToCart(item2)

console.log(user);

purchaseItemsInCart()

console.log(user);