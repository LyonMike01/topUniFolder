
// CONSTRUCTOR FUNCTION

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

 }

// Create a new User

let Lyon = new User ("Lyon Mike", "12345");


//Log the user in

let loginResult = Lyon.login();

//Print out login result
 console.log("Login Message: "+ loginResult);

 //check login status
 console.log("Login Status: " + Lyon.loginStatus);


  //log the user out
  console.log(Lyon.logout());;

//Print out login status
console.log("Login Status: " + Lyon.loginStatus);

//Checking the type of 

// console.log(typeof(Lyon));
// console.log(typeof(User));