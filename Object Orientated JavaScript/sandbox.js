/* eslint-disable space-before-blocks */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */

// classes
class User {
    // constructor
    constructor(username, email){
        this.username = username
        this.email = email
        this.score = 0
    }

    // methods - note arrow functions don't bind to this keyword
    login(){
        console.log(`${this.username} just logged in`)
        return this
    }
    logout(){
        console.log(`${this.username} just logged out`)
        return this
    }

    incScore(){
        this.score += 1
        console.log(`${this.username} has a score of ${this.score}`)
        return this
    }
}

const userOne = new User('shaun', 'shaun@thenetninja.co.uk')
const userTwo = new User('Rich', 'rich@thenetninja.co.uk')

console.log(userOne, userTwo)
userOne.login()

// method chaining
userOne.incScore().incScore()
userTwo.login().incScore().logout()
