
// CONSTRUCTOR FUNCTION

/* function user (userName, password) {
    this.userName = userName;
    this.password = password;

    this.login = function ( ) {
        return "Successfully Logged in";
    }

};

let Lyon = new user ("Lyonmike01", "123abc");

 console.log(Lyon.login()); */

 //CLASS DECLARAION

 class user {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
 }

    user.prototype.login = function () {
        return "Successfully Logged in";
    };

    user.prototype.logout = function () {
        return "Successfully Logged out";
    };


let Lyon = new user ("Lyonmike01", "123abc");

//  console.log(Lyon.logout());

class Employee {
    constructor (_name, _department, pob, qualification) {
        this.name = _name;
        this.department = _department;
        this.pob =  pob;
        this.qualification = qualification;
    }

    greet(timeOfDay) {
        timeOfDay = "Sunday";
        if (timeOfDay === "Sunday") {
            return this.name + " it's Sunday"
        }
    }
}

let Mike = new Employee ("Lyon Mike", "IT", "Niger, Nigeria", "B.Tech");
// console.dir(Mike);
// console.table(Mike);
console.log(Mike);
console.log(Mike.greet());

let King = new Employee ("King Mike", "Sport", "Lagos, Nigeria", "B.Tech");
// console.dir(King);
// console.table(King);
console.dir(King.greet());
console.log(King.greet());