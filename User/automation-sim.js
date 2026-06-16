import ShoppingCart from "./shopping_class.js";

const itemArr = [101, 102, 103];
const cart = new ShoppingCart(itemArr);

const start = Date.now();

for (const id of itemArr) {
    await cart.scanItem(id);  
}

const end = Date.now();
console.log(`Total Execution Time: ${((end - start) / 1000).toFixed(2)}s`);