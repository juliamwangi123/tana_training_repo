export default class ShoppingCart {
    itemArr = [];

    constructor(itemArr) {
        this.itemArr = itemArr;
    }

    async scanItem(id) {
        await new Promise(resolve => setTimeout(resolve, 2000)); 

        if (this.itemArr.includes(id)) {
            console.log(`Item ${id} scanned successfully`);
        } else {
            console.log(`Item ${id} not found`);
        }
    }
}