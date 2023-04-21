const firstName = "Tiago";
const lastname = "Rodrigues";
const number = 3;
const names = "Tiago";


console.log(`Meu nome eh ${firstName.toUpperCase()} ${lastname.toLowerCase()}`);

console.log(names.split(""));

console.log(number + 3);
console.log(number.toString());
console.log(typeof number);
console.log(typeof number.toString());

//BOOLEANOS
const a = 2;
const b = 2;

if (a == b) {
  console.log(`${a} e ${b}, eles são iguais!`);
} else {
  console.log(`${a} e ${b}, eles não são iguais!`);
}
//Arrays

const names2 = ["Felipe", "João", "Júlia", 10, false];

const joao = names2[4];
names2.push('Pedro');
names2.unshift('Natália');
names2.pop()
names2[3] = "Gustavo" 

console.log(names2.indexOf('Felipe'))

console.log(names2);