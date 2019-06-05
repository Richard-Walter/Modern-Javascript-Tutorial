/* eslint-disable padded-blocks */
/* eslint-disable space-before-blocks */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */

// classes
class User {
    // constructor
    constructor(username, email) {
        this.username = username
        this.email = email
        this.score = 0
    }

    // methods - note arrow functions don't bind to this keyword
    login() {
        console.log(`${this.username} just logged in`)
        return this
    }
    logout() {
        console.log(`${this.username} just logged out`)
        return this
    }

    incScore() {
        this.score += 1
        console.log(`${this.username} has a score of ${this.score}`)
        return this
    }
}

const userOne = new User('shaun', 'shaun@thenetninja.co.uk')
const userTwo = new User('Rich', 'rich@thenetninja.co.uk')

userOne.login()

// method chaining
userOne.incScore().incScore()
userTwo.login().incScore().logout()

// class inheritance
class Admin extends User {

    constructor(username, email, title){
        super(username, email)
        this.title = title
    }

    deleteUser() {
        users = users.filter(u => u.username !== userOne.username) // false will filter out user
    }
}

const userThree = new Admin('Admin', 'admin@gmail.com', 'black-belt-ninja')

console.log(userOne, userTwo, userThree)

let users = [userOne, userTwo, userThree]
console.log(users)
userThree.deleteUser(userTwo)
console.log(users)
