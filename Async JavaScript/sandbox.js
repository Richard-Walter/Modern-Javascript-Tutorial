// console.log(1)
// console.log(2)

// setTimeout(() => {
//     console.log('callback function fired')
// }, 2000);

// console.log(3)
// console.log(4)

/*       HTTP Requests       */
const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        //request  goes through 4 state changes  opened, headers, received, loading, done
        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) { //Request done and No Error
                const data = JSON.parse(request.responseText)   //convert JSON to an JS array
                resolve(data)
            } else if (request.readyState === 4) {
                reject("error getting resource");
            }
        })

        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.open('GET', resource);
        request.send()
    });
    ;
}

getTodos('luigi.json').then(data => {
    console.log('promise 1 resolve', data)
    return getTodos('mario.json')
}).then(data => {
    console.log('promise 2 resolve', data)
    return getTodos('shaunn.json')
}).then(data => {
    console.log('promise 3 resolve', data)
}).catch(err => {
    console.log("promise rejected", err)
})


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

/*               FETCH API               */
//better way than using the XMLHttpRequest method - implements Promise under the hood too





