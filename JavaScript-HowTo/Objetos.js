const person = {
    firstName: 'Felipe',
    lastName: 'Rocha',
    age: '21',
    hobbies: ['Assistir F1', 'Jogar futebol', 'Ler'],
    dog: {
        name:"Simba",
        age: 4,
    },
};


// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

//Mesma coisa de cima soq mais facil
const {firstName: primeironome,lastName,age,hobbies,dog} = person;


console.log(primeironome);
console.log(lastName);
console.log(age);
console.log(hobbies[2]);

console.log(person)