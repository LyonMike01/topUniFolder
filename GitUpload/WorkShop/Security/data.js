

//Filtering

const ages = [32, 33, 16, 40];


function checkAdult(age) {
  return age >= 18;
}


ages.filter(checkAdult);


// Syntax
// array.filter(function(currentValue, index, arr), thisValue)


//Example 2

const ages1 = [32, 33, 12, 40, 51, 57];
const values = 23
function checkAge(age) {
  return age > values;
}

function myFunction() {
ages1.filter(checkAge);
}


//Sorting


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let key = fruits.sort();
// console.log(key);



const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let key2 =  fruits2.sort();
console.log(key2)
// let key3 = fruits2.reverse();
// console.log(key3)

// Syntax
// array.sort(compareFunction)



// Sort numbers in ascending order:

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});


// Sort numbers in descending order:

const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function(a, b){return b-a});



// Find the lowest value:

const points2 = [40, 100, 1, 5, 25, 10];

// Sort the numbers in ascending order
points2.sort(function(a, b){return a-b});

let lowest = points2[0];




// Find the highest value:

const points3 = [40, 100, 1, 5, 25, 10];

// Sort the numbers in descending order:
points3.sort(function(a, b){return b-a});

let highest = points3[0];
