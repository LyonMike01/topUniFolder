
// CONSTRUCTOR FUNCTION


//Example 1

class User  {

    loginStatus = false;

    constructor (_userName, _password) {
    this.userName = _userName;
    this.password = _password;
    };
   login () {

    let id = this.userName;
    let hashedPassword = this.password;
    if (id === "Lyon Mike" && hashedPassword === "12345") {
        this.loginStatus = true;
        return "Successfully Logged in";
    } else {
        return "Incorrect Login Details";
    }
    };

    logout () {
        this.loginStatus = false;
        return "Successfully Logged out";
    };  


    static checkLoginStatus() {
        let name = "Mikie";
        return name;
    }

 }

let loginStatus = User.checkLoginStatus();

console.log(loginStatus);

//Example 2

class Request {
    static callRequest (params) {
        return "This is your parameter: " + params;
    }

    static getRequest (params) {
        return "This is your parameter: " + params;
    }

}

let reqVal = Request.callRequest("Backend Engr");
let newReqVal = Request.getRequest("Frontend Engr");

console.log(reqVal);
console.log(newReqVal);