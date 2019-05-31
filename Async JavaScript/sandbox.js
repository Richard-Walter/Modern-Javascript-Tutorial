// console.log(1)
// console.log(2)

// setTimeout(() => {
//     console.log('callback function fired')
// }, 2000);

// console.log(3)
// console.log(4)

/*       HTTP Requests       */
// const getTodos = (resource) => {

//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         //request  goes through 4 state changes  opened, headers, received, loading, done
//         request.addEventListener('readystatechange', () => {
//             // console.log(request, request.readyState);
//             if (request.readyState === 4 && request.status === 200) { //Request done and No Error
//                 const data = JSON.parse(request.responseText)   //convert JSON to an JS array
//                 resolve(data)
//             } else if (request.readyState === 4) {
//                 reject("error getting resource");
//             }
//         })

//         // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//         request.open('GET', resource);
//         request.send()
//     });
//     ;
// }

// getTodos('luigi.json').then(data => {
//     console.log('promise 1 resolve', data)
//     return getTodos('mario.json')
// }).then(data => {
//     console.log('promise 2 resolve', data)
//     return getTodos('shaun.json')
// }).then(data => {
//     console.log('promise 3 resolve', data)
// }).catch(err => {
//     console.log("promise rejected", err)
// })


// //callback hell!!!
// getTodos('luigi.json', (err, data) => {
//     console.log(data);
//     getTodos('mario.json', (err, data) => {
//       console.log(data);
//       getTodos('shaun.json', (err, data) => {
//         console.log(data);
//       });
//     });
//   });

/*     PROMISE EXAMPLE           */

// const getSomething = () => {

//     //promise to do something but takes time - leads to resolved or rejected due to error 
//     return new Promise((resolve, reject) => {   //resolve, reject and builtin promise functions
//         //fetch something
//         // resolve('somedata') //this then calls the then() function
//         reject('some error')
//     });
// }

// console.log(getSomething());

//then() method takes 2 call back functions for resolve(arg) and reject(arg)
// getSomething().then((data) => {
//     console.log(data)

// }, (err) => {
//     console.log(err)
// });

//neater way than above
// getSomething().then(data => {
//     console.log(data)

// }).catch(err => {
//     console.log(err)
// })

/*               FETCH API - built into the languae               */
//better way than using the XMLHttpRequest method - implements Promise under the hood too

//fetch() returns a promise so we can tack on a then()
// fetch('luigi.json').then((response) =>{
//     console.log('Resolved', response)
//     return response.json();    //gets us the response data as a another Promise
    
// }).then(data =>{
//     console.log(data)

// //in the fetch api err is only called if there is a network error    
// }).catch((err) => {
//     console.log('Rejected', err)
// }); 

/*                   ASYNC and AWAIT                  */
//allow us to chain promises together in a cleaner more readble way.

//using async keyword always means it returns a promise
const getTodos = async() => {

    //await keyword stalls JavaScript until the promise has resolved, then we get response
    const response = await fetch('luigis.json')

    if (response.status !==200) {
        throw new Error('Cannot fetch the JSON data')
    }

    //json method is asyncronous itself, so use the await keyword
    const data = await response.json();
    return data;    //returned to the then() function in the promise
}

console.log(1)
console.log(2)

//non blocking-returns a promise
getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected', err.message))

console.log(3)
console.log(4)