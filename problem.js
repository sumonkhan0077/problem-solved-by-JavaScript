const cart = [
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Pant", price: 800, quantity: 1 },
  { name: "Shoes", price: 1200, quantity: 1 }
];
// let price = 0;

// for (let product of cart ) {
//    price = price + product.price * product.quantity
   
// }
const originalTotal = cart.reduce((sum, item) => {
  return sum + (item.price * item.quantity);
}, 0);


const price = cart.reduce((sum , item)=> {
    let itemTotal = item.price * item.quantity

    let extraDiscount = 0;

    if (item.quantity >= 2 ) {
         extraDiscount= itemTotal * .05
    }
       return sum = (itemTotal - extraDiscount)  + sum
},0)

// main discount
let totalPrice = price;
if (price > 1000) {
   discount= price * .10
   totalPrice = price - discount
}

console.log("Total Price:",originalTotal)
console.log("Final price:", totalPrice)