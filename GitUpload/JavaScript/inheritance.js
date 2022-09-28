
// Pet [dog, cat]


class Pets {
    name
    legs
    owner

    constructor (name, legs, owner) {
        this.name = name
        this.legs = legs
        this.owner = owner
    }

    walk () {
        return this.name + " can walk";
    }
}

class Dog extends Pets {
    constructor (name, legs, owner, bark) {
        super(name, legs, owner)
        this.bark = bark;
    }
        run() {
            return this.name + " can run";
        }
}

let Bingo = new Dog ("Bingo", 4, "Lyon Mike", "True")

console.log(Bingo);
console.log(Bingo.walk());
console.log(Bingo.run());


class Cat extends Pets {
    constructor (name, legs, owner, look) {
        super(name, legs, owner)
        this.look = look;
    }

    jump () {
        return this.name + " can jump";
    }

}

let Popski = new Cat ("Popski", 4, "Lyon Mike", "True")

console.log(Popski);
console.log(Popski.walk());
console.log(Popski.jump());
