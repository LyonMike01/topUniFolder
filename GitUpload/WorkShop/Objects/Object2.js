
//continuation of Object1

class Person {
    name = "Lyon Mike";
    age = 20;
    years_of_expi = "4_years";

    static Ride (){
        console.log("Static");
    }
}


class Employees extends Person {
    dept = "Tech"
}

class Position extends Employees {
    position = "Manager"
}


// the stactic method can only work for the person objec
// the Mike variable cannot call the methode because iot is 
// static and only belong to the Person Object
console.log(Person.Ride());

const Mike = new Position();


// When you wish to delete an object property

delete Mike.age;
console.log(Mike.age)


console.log(Mike.name, Mike.dept, Mike.position);

console.log(Object.keys(Mike));

Object.keys(Mike).forEach((key) =>{
console.log(Mike[key]);
})
 