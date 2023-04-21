const btn = document.querySelector('#submit-button');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const myForm = document.querySelector("#my-form");

const items = document.querySelector('.items')

btn.addEventListener('click', function(evemt){
    evemt.preventDefault();
    
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;


    if(nameValue === "" || emailValue === ""){
        return alert("Please fill out all the fields!")
    }
    myForm.style.background = "red";
    items.firstElementChild.textContent = nameValue;
    items.children[1].textContent = emailValue;
});
