// /*     FILTER METHOD    */

// const scores = [10, 30, 15, 25, 50, 40, 5];

// //filter out scores that are higher than 20 i.e True values and store in new array
// const highscores = scores.filter(score => score > 20);
// console.log(scores);    //this method doesn't alter the original array
// console.log(highscores);

// const users = [
//   {name: 'shaun', premium: true},
//   {name: 'yoshi', premium: false},
//   {name: 'mario', premium: false},
//   {name: 'chun-li', premium: true}
// ];

// const premiumUsers = users.filter(user => user.premium);
// console.log(premiumUsers);

/*     MAP METHOD    */
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map(price => price / 2);
console.log(salePrices);

// const products = [
//   {name: 'gold star', price: 20},
//   {name: 'mushroom', price: 40},
//   {name: 'green shells', price: 30},
//   {name: 'banana skin', price: 10},
//   {name: 'red shells', price: 50}
// ];

// const saleProducts = products.map(product => {
//   if(product.price > 30){
//     return {name: product.name, price: product.price / 2}
//   } else {
//     return product;
//   }
// });

// console.log(products, saleProducts);