
// the three major ways of creating objects

// first Object literal notation
 const obj = {
    name: "Daniel"
 }

//second function constructor
function person(){
    this.name = "daniel"
    return this.name;
}
console.log(person());

//third class constructor

class Vehicle {


constructor(name, model) {

    this.name = name;
    this.model = model;

}

sayName() {
    console.log(this.name);
}

}


//inheritance

class Cars extends Vehicle {

constructor(name, model, tyres) {
    super(name, model)
    this.tyres = tyres;
}
getModel (){
    console.log(this.model);
}

}

class Version extends Cars {
    constructor (name, model, tyres, year, type) {
        super(name, model, tyres)
        this.year = year;
        this.type = type;
    }

    getAll (){
        console.log(this.name, this.model, this.tyres, this.year, this.type); 
    }
}

//instance of the class

const toyota = new Cars("hilux", "hilux le", 4)
toyota.sayName();
toyota.getModel();


let anotherMe = new Version ("Kingy", "4X3D", 4, "2020", "Le-ZZ")

anotherMe.getAll();
