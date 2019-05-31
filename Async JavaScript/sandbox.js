// console.log(1)
// console.log(2)

// setTimeout(() => {
//     console.log('callback function fired')
// }, 2000);

// console.log(3)
// console.log(4)

/*       HTTP Requests       */
const getTodos = (callback) => {
    
    const request = new XMLHttpRequest();

    //request  goes through 4 state changes  opened, headers, received, loading, done
    request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) { //Request done and No Error
                callback(undefined, request.responseText);
            } else if  (request.readyState === 4) {
                callback("could not find data", undefined);
            }
    })

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send()
}

console.log(1)
console.log(2)

getTodos((err, data) => {
    console.log('Callback Fired')
    if (err){
        console.log(err)
    } else {
        console.log(data)
    }
});

console.log(3)
console.log(4)