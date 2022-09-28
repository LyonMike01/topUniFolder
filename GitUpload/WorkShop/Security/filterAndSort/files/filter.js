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