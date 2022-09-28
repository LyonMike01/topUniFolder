
// multiply
exports.multi = function  (a, b) {
    return a * b;
}

// Addtion
exports.add = function  (a, b) {
    return a + b;
}

// subtraction
exports.minus = function  (a, b) {
    return a - b;
}

// Division
exports.divide = function  (a, b) {
    return a / b;
}

/*

//another methode of exporting
//1.
module.exports = {
    multi,
    add,
    minus,
    divide
}

// 2.

// multiply
exports.multi = function (a, b) {
    return a * b;
}

// 3. wrap the functions as object functions

module.exports = {

// multiply
 multi (a, b) {
    return a * b;
},

// Addtion
 add (a, b) {
    return a + b;
},

// subtraction
 minus (a, b) {
    return a - b;
},

// Division
 divide (a, b) {
    return a / b;
}

}; */