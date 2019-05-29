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

/*     MAP METHOD    */ /* Similar to list comprehension in Python*/
// const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map(price => price / 2);
// console.log(salePrices);

// const products = [
//   {name: 'gold star', price: 20},
//   {name: 'mushroom', price: 40},
//   {name: 'green shells', price: 30},
//   {name: 'banana skin', price: 10},
//   {name: 'red shells', price: 50}
// ];
// //build a new array
// const saleProducts = products.map(product => {
//   if(product.price > 30){
//     return {name: product.name, price: product.price / 2}  
//   } else {
//     return product;
//   }
// });

// console.log(saleProducts);


// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((acc, curr) => {
//   if(curr > 50){
//     acc++;
//   }
//   return acc;
// }, 0);

// console.log(result);

/*          REDUCE METHOD         */
// //doesn't return an updated array 
// const scores = [10, 20, 60, 40, 70, 90, 30];

// //returns result as 3
// const result = scores.reduce((acc, score) => { //acc is the running total which is rememebered for each running toatl
//   if (score > 50) {
//     acc++;
//   }
//   return acc; //this is the value that gets return as the parameter for the next iteration
// }, 0);    //0 is the intial value of the accumulator (acc)

// console.log(result);

// const scores = [
//   { player: 'mario', score: 50 },
//   { player: 'yoshi', score: 30 },
//   { player: 'mario', score: 70 },
//   { player: 'crystal', score: 60 }
// ];

// const mariosTotal = scores.reduce((acc, score) => {
//   if (score.player === 'mario') {
//     acc += score.score;
//   }
//   return acc;
// }, 0);

// console.log(mariosTotal);

// /*             FIND METHOD            */
// /*  returns the value of the first value that passes a test in the callback function   */
// const scores = [10, 5, 0, 40, 60, 10, 20, 70];

// const firstHighScore = scores.find(score => score > 50)

/*                       SORTING ARRAYS              */

// example 1 - sorting strings
// const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// names.sort(); //alters the original array (destructive)

// names.reverse();
// console.log(names);

// example 2 - sorting numbers
// const scores = [10, 50, 20, 5, 35, 70, 45];

// scores.sort(); //doesn;t reorder numbers properly
// scores.sort((a,b) => b-a);  //this reorders numbers properly
// scores.reverse();
// console.log(scores);

// example 3 - sorting objects
// const players = [
//   {name: 'mario', score: 20},
//   {name: 'luigi', score: 10},
//   {name: 'chun-li', score: 50},
//   {name: 'yoshi', score: 30},
//   {name: 'shaun', score: 70}
// ];

// //we need to provide a sort function to provide the sorting logic
// players.sort((a,b) => {
//   if(a.score > b.score){  //compare every to consectutive elements in the array
//     return -1;  //dont re-order thus return negative number
//   } else if (b.score > a.score){
//     return 1; //we want to re-order so return positive number
//   } else {
//     return 0; //otherwise do nothing
//   }
// });

// //simplified from above
// players.sort((a,b) => b.score - a.score);

// console.log(players);

/*     METHOD CHAINING        */

    
const products = [
  {name: 'gold star', price: 30},
  {name: 'green shell', price: 10},
  {name: 'red shell', price: 40},
  {name: 'banana skin', price: 5},
  {name: 'mushroom', price: 50}
];

// const filtered = products.filter(product => product.price > 20)
// console.log(filtered)

// const promos = filtered.map(product => {
//   return `the ${product.name} is ${product.price/2} pounds`
// })

//Easier to use method chaining to simplify the above code
const promos = products
  .filter(product => product.price > 20)
  .map(product => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);