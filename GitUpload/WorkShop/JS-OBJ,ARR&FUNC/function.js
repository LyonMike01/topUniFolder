
function sum(num1, num2 /*Parameters*/) {
	let result = num1 + num2;
	return result;
}

let total = sum(3, 4 /*Argument*/);
console.log(total);

//Example 2

function sum(num1, num2 = 22) {
	let result = num1 + num2;
	return result;
}

console.log(sum(3)); // Parsing one argument will evalute 
					//	the function along with the "num = 22" above

console.log(sum(3, 5)); // Parsing two argument will not evalute
						//	the function along with the "num = 22" above



//Example 2

function sum(num1, num2) {
	let result = num1 + (num2 || 23);
	return result;
}

console.log(sum(3)); // the function will evaluate along with 
					 //	the "num || 22" if only one params is parsed 

console.log(sum(3, 5)); // the function will not evaluate along with 
					 	//	the "num || 22" if two params is parsed


let bonus = 4;

function add(num1, num2) {
	let result = num1 + num2 + bonus;
	return result;
}

console.log(add(3, 20));

function multi(y, x) {
	let result = x * y * bonus;
	return result;
}

console.log(multi(3, 20));

//Function Expression

let displayScore = function(name) {
	return "Hello " + name;
}
console.log(displayScore("Lyon"));

const player = (name, position) => {
	return name + " " + position;
}

console.log(player("Diego Costa", 9));