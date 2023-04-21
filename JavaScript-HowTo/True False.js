const x = '';
// FALSE

const y = 0;
console.log(!!y);

const a = null;
const b = undefined;

//TRUE
const list = [
    "server",
    "Alura"
];
const object = {
    Server: "Lol",
    Alura: "lol"
};

//CHecar se lista é vazia

if(list.length > 0){
    console.log(list);
}


if(object.length > 0){
    console.log(object);
}