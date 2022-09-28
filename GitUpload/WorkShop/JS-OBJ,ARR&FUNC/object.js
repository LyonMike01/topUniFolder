//Using the object constructor syntax

 let mike = {
	name: "Lyon",
	dob: "12/03/20",
	studentId: "ab098",
	isResident: false,
	height: 7.1,
	house_address: "No. 10 River Basin"
}

// Example

let person = new Object(mike);


console.log(person);


// Using the object litral syntax

let user = {};

// Example

let student = {
	name: "Isaac",
	dob: "12/03/95",
	studentId: "12344",
	isResident: true,
	height: 5.9,
	"house address": "No. 2 Ikeja street"
}

// console.log(student);

// Object Destructuring

let {name, studentId} = student;

// console.log(name);
// console.log(studentId);

// //OR

// let {name: name1, studentId: stdId} = student;

// console.log(name1);
// console.log(stdId);


// Accessing an object property
// objectName.propertyName
// console.log(student["house address"]);

// // creating a new property of an objectNamestudent.status = "online";
// student.status = "online";

// // delete height from student object
// delete(student.height);

// console.log(student);