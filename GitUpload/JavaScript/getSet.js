

class Employee {

    #employeeName

    constructor (employeeName) {
        this.#employeeName = employeeName;
    }

    get employeeName () {
        return this.#employeeName;
    }

    set employeeName (newEmployeeName) {
         this.#employeeName = newEmployeeName;
    }
    
}

//Created new Instance
let Lyon = new Employee ("Lyon MIke");


//Using the getter
console.log(Lyon.employeeName);


//Using the setter
Lyon.employeeName ="Temi Gracie";
console.log(Lyon.employeeName);
