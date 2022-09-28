

class Employee {

    #employeeName
    #employeeDept

    constructor (employeeName, employeeDept) {
        this.#employeeName = employeeName;
        this.#employeeDept = employeeDept;    
    }

    get employeeName () {
        return this.#employeeName;
    }

    set employeeName (newEmployeeName) {
         this.#employeeName = newEmployeeName;
    }

    get employeeDept () {
        return this.#employeeDept;
    }

    set employeeDept (newEmployeeDept) {
         this.#employeeDept = newEmployeeDept;
    }

showDetails () {
    return this.#mergeDetails();
}

#mergeDetails () {
    return this.employeeName + " is in the " + this.#employeeDept + " Department";
}


}

//Created new Instance
let Lyon = new Employee ("Lyon MIke", "IT");


//Using the getter
console.log(Lyon.showDetails());
