

//Example 1

class Employee {

    //due to the # before the employeeName, it cannot be accessed by anyone
    // except throug the use of getter or setter

    #employeeName

    constructor (employeeName) {
        this.#employeeName = employeeName;
    }

    //This will give no room for editting like in line 22 below
    get employeeName () {
        return this.#employeeName;
    }

}

let Lyon = new Employee ("Lyon MIke");

// Lyon.employeeName = "Mando";

console.log(Lyon.employeeName);


// Example 2

class Employee2 {

    #employeeName2

    constructor (employeeName2) {
        this.#employeeName2 = employeeName2;
    }

}

let Mike = new Employee2 ("Lyon MIke");

// Lyon.employeeName2 = "Mando";

console.log(Mike.employeeName2);
