class Person {
    constructor(firstName, LastName, age){
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }

    getFullName(){
        console.log(`${this.firstName} ${this.LastName}`);
    }

    static speak() {
        console.log("Hello world!");
    }
}

const person = new Person("Jane","Doe", 40);

console.log(person);

person.getFullName();

Person.speak();
//-----------------------------
class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} made some noise!`)
    }
}

class Dog extends Animal {
    constructor(name){
        super(name);
    }

    speak(){
        console.log(`${this.name} barked!`)
    }
}

const animal = new Animal("Simba");
const dog = new Dog("Bob");

animal.speak();
dog.speak();