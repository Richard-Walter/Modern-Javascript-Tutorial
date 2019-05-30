// //dates and times
// const before = new Date('5/30/2017, 9:34:20')
// const now = new Date();
// console.log(now)

// //Years, months, day, times
// console.log(now.getFullYear())  //2019
// console.log(now.getMonth()) // !!!!4 for May as it is zero based!!!!
// console.log(now.getDate())  //30
// console.log(now.getDay())   //!!!returns 4 for Thursday as it is zero based!!!!
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

// //datestrings
// console.log(now.toDateString()) //Thu May 30 2019
// console.log(now.toTimeString()) //09:32:29 GMT+1000
// console.log(now.toLocaleString())   //5/30/2019, 9:33:11

// //timestamps - milliseconds since 1/1/1970
// console.log(now.getTime())  //1551722699774
// const diff = now.getTime() - before.getTime()
// const mins = Math.round(diff/1000/60)   //1000 convert milliseconds, then 60 convert to minutes
// console.log(mins)

// //converting timestamps
// console.log(new Date(before))

// //digital clock
// const clock = document.querySelector('.clock');

// const tick = () =>{
//     const now = new Date();   
//     const h = now.getHours();
//     const m = now.getMinutes();
//     const s = now.getSeconds()
    
//     const html = `
//         <span>${h}</span> :
//         <span>${m}</span> :
//         <span>${s}</span>
//     `;

//     clock.innerHTML = html;

// }
// //call tick function
// setInterval(tick, 1000)

/*          DATE FNS LIBRARY            */
//formatting dates and times  date-fns library https://date-fns.org/
const now = new Date()
console.log(dateFns)    //added a script link in the HTML tothe date fns library
console.log(dateFns.format(now, 'YYYY MM D'))  //see https://date-fns.org/v1.30.1/docs/format for string tokens
console.log(dateFns.format(now, 'dddd, Do MMMM YY'))  //THursday, 30th May 19

//conparing dates
const before = new Date('February 1 2019 12:00:00')
console.log(dateFns.distanceInWords(now, before, {addSuffix: true}))    //4 months ago

