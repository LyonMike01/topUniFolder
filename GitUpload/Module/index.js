

//using functions in another file


const arithemetic = require("./arithemetic");
 

let rrr= arithemetic.minus(1,2);

console.log(rrr);


/*OR use destructure method

const {minus, add, multi, divide} = require("./arithemetic");
 
let multi = multi(2,4);
console.log(multi);


*/

//destructure method can also be used in norm js module

let user = {
    name: "Lyon Mike",
    gender: "Male"
}

let {name, gender} = user;

console.log(name, gender);








//OR this metho but it requires an npm

//import arithemetic from "./arithemetic.js";