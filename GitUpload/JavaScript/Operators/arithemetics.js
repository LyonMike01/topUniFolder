const item1 = 10;
const item2 = 5

//addition operator

const addition = item1 + item2;

//subtract operator

const subtraction = item1 - item2;

//multiplication operator

const multiplication = item1 * item2;

//division operator

const division = item1 / item2;

 //module operator

 const mod = item1 % item2; //gives the remainder of the division


 //assignment operator (= sign)

	const a = 10;
	console.log(a);

//assignment operator chaining

	const b = 10, c = 6, d = 4;
	console.log(b, c, d);

// exponetial operator

const  expo = Math.pow(2,2), expo1 = Math.pow(4,2), expo2 = Math.pow(3,3);

console.log(expo, expo1, expo2);

// logical operators

//logical assignment OR ||=
//logical assignment AND &&=
//nullish coalescing  ??=

let something;				// let something = "Mike";
something ||= "No VAlUE";	// something ||= "No VAlUE"; this only work when there's no value assigned to the variable
console.log(something);		// console.log(something); this will printout "Mike"


let thing = 50;											// let thing;
thing &&= "No VAlUE";									// thing &&= "No VAlUE"; this will return undefiend if there is no value assignment
console.log(thing); //this will printout "No Value"		// console.log(thing); this will printout "Undefined"


// if condition

let numb1 = 10;
let numb2 = 5;

if (typeof(numb1) == "number" ){
	console.log("numb1 is a number");
} else{
	let realType = typeof(numb1);
	console.log("numb1 is real " + realType);
}

//contro flow

// let age = 18;
// let message;

// age >= 36 ? (message = "You fit Drive") : (message = "You no fit Drive");

//console.log(message);

// let age = 24;
// let message;

// age >= 27 ? (message = "You fit Drink") : (message = "You no fit Drink");

// console.log(message);

let age = 12;
let voice = age >= 18 ? "You can Sing" : "You cant Sing";
console.log(voice);

//switch statement

let result = "A";
switch (result) {
	case "A":
		console.log("Distinction")
		break;
	case "B":
		console.log("Excellent")
		break;
	case "C":
		console.log("Good")
		break;
	case "D":
		console.log("Pass")
		break;

		default:
			console.log("Students Result")
		break;
}

//while statement

let count = 50;
let number = 10;

while (number != count){
	console.log(number);
	number++
}

// do while


let counter = 10;
let esti = 50;

do	{
	counter += 10;
	console.log(counter);
	}while(counter < esti);


//for loop

let array = [1, 2, 3, 5, 8, 7, 8, 0, 4]
for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
	
}


//break statement

let arrayCC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
for (let i = 0; i < arrayCC.length; i++) {
	console.log(arrayCC[i]);
	if (i === 5 ){
		break;
	}
}

//continue statement


for (let i = 0; i < 10; i++) {
	if (i === 5 ){
		continue; // unlike brak this continues execution 
				 // but skipps the obj at the specified index 
	}
	console.log(i);

}

//comma operator

let man = "MIke";
console.log(man, 1+4, "Lyon", 100);