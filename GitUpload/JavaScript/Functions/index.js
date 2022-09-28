
var a =10;

//wahtever is after the return statement 
// will not work except there is conditonal statement
function sum(a,b){
	console.log(arguments);
	console.log(arguments[0]);
	console.log(arguments[1]);
		return 5 + 5;
		
}
var res = sum(6,2);
console.log(res);

//Arrow function

const greet = (firstName, lastName, timeOfDay) => {
	// let fullName = '${firstName} ${lastName}'; maybe Jquarey
	
	 var fullName = firstName + " " + lastName;

	if (timeOfDay.toLowerCase() === "morning") {
		// return '${fullName} "says Good Morning"'; maybe JQuery
		return fullName + " says Good Morning";
	}
	else if (timeOfDay.toLowerCase() === "afternoon") {
		return fullName + " says Good Afternoon";
	} else {
		return fullName + " says Good Evening";
	}
}

let result = greet ("Lyon", "Mike", "morning");
console.log(result);


var user = {
	name: "Lyon mIke",

	greet() {
		console.log(this.name);
	},

	//arrow function doesnt work with "this"
	caller: () => {
		console.log(this.name);
	}
}

user.greet();
user.caller();

// naked arrow function lol

var multiply = (a,b) => a + b;

console.log(multiply(3,4));


// function in a function

function calculate(a) {
	function area(r) {
		var compute = (3.142 * r * r);
		console.log(compute);
		return compute;
	}
	
	let value = (area(5) + 2) / a;
	return value;
}


console.log(calculate(40));


//anoymous function

(function () {
	console.log("I am Anonymous");
})();

//Pass value into functions

let user1 = {
	name: "Lyon Mike",
	age: 10
}


function grabUser(input) {
	var name = input.name;
	var age = input.age;
	console.log(name, age);
}

grabUser(user1);

// default params

function def(name="No Name", age){
// function def(name="No Name", age =20)
//  return '${name} is ${age} year(s) old';
return name + " is age year(s) old";

}

// let rest = def("Lyon Mike", 10);
let rest = def(undefined, 10);
console.log(rest);


// recursive function

function recursiveFunc(){
	console.log("recurse");
	recursiveFunc();
}

let count = 1;
function recursiveFunc(){
	count ++;
	if (count === 100){
		return
	}
	console.log(count);
	recursiveFunc();
}

recursiveFunc();