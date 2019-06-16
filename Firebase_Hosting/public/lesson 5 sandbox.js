/*                     OBJECTS             */

const blogs = [
    //storing objects inside arrays
    { title: 'why mac and cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 }

];

console.log(blogs)

let user = {

    //properties
    name: 'crystal',
    age: 30,
    email: 'willthisdo@gmail.com',
    blogs: [
        { title: 'why mac and cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50 }
    ],    

    //methods
    login(){
            console.log('the user logged in')
        },

        logout(){
            console.log('the user logged out')
        },

        logBlogs(){
            console.log(this);  //prints user onject
            console.log('this user has written the following blogs:')
            this.blogs.forEach(blog => {
                console.log(blog.title, blog.likes);
            })
        }

};

console.log(user)

// can access properties using dot or square bracket notation
console.log(user.name)
console.log(user['name'])

user.age = 29

console.log(user.age)
console.log(typeof (user))

user.login()
user.logout()
user.logBlogs()
console.log(this)       //prints window base object

//Math object
console.log(Math)
console.log(Math.PI)

const area = 7.7;
console.log(Math.round(area))
console.log(Math.floor(area))
console.log(Math.ceil(area))
console.log(Math.trunc(area))

console.log(Math.trunc(Math.random()*100))

//Primitive types - numbers, strings, booleans, null, underfined, & symbols: stored on stack
//Referece objects are stored on the heap, point to the object sotred on the stack

// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);  //both prints 50

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);  //prints 100, 50

// reference values

userOne = { name: 'ryu', age: 30 };
userTwo = userOne;
console.log(userOne, userTwo);  //prints {name: "ryu", age: 30} {name: "ryu", age: 30}

userOne.name = 'chun-li';
console.log(userOne, userTwo);  //prints {name: "chun-li", age: 30} {name: "chun-li", age: 30}

