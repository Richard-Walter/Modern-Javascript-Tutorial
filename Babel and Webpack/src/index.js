// import specific function from another JavaScript module
import {addTitle, styleBody, contact} from './dom';
import users, { getPremUsers } from './data'   //import the default value

const premUsers = getPremUsers(users)


console.log(users, premUsers);

console.log('dsfsdf file');

addTitle('test')
styleBody();
console.log(contact);