// const ages = [8, 13, 27, 30, 22, 40];

// const evenAges = ages.filter(function(age){
//     return age % 2 == 0;
// });

// console.log(evenAges)

// const notevenAges = ages.filter(function(age){
//     return age % 2 != 0;
// });

// const sunOfAges = ages.reduce(function(age, accumulator){
//     return accumulator + age;
// }, 0);

//Exercicio----

let numbers = [ ]

// Adicionando 50 números a lista
for (let i = 1; i < 50; i++ ) {
    numbers.push(i)
}

console.log(`The numbers is ${numbers}`)



// Filtrando os números pares da lista
const evenNumbers = numbers.filter(function(number){
    return number % 2 == 0
})



// Somando os números pares da lista
const sumOfNumbers = evenNumbers.reduce(function(number, accumulator){
    return accumulator + number
}, 0);



console.log(`The even numbers is ${evenNumbers}`)

console.log(`The sum of the even numbers is ${sumOfNumbers}`);