const number1 = 10;
const number2 = 20;

if (number1 === number2){
    console.log(`O número ${number1} e o número ${number2} são iguais!`);
} else{                                                                                
    console.log(`O número ${number1} e o número ${number2} não são iguais!`)
}

const evenNumber1 = number1.filter(function(number){
    return number % 2 == 0
});
const notevenNumber1 = number1.filter(function(number){
    return number % 2 != 0
});

console.log(`O número 1: ${evenNumber1} é Par!`);
console.log(`O número 1: ${notevenNumber1} é Ímpar!`);

const evenNumber2 = number2.filter(function(number){
    return number % 2 == 0
})
const notevenNumber2 = number2.filter(function(number){
    return number % 2 != 0
})


console.log(`O número 2: ${evenNumber2} é Par!`);
console.log(`O número 2: ${notevenNumber2} é Ímpar!`);

if (number1 < 0){
    console.log("O número é Negativo!");
}else{
    console.log("O número é Positivo!");
}


if (number2 >= 0){
    console.log("O número é Positivo!");
}else{
    console.log("O número é Negativo!");
}