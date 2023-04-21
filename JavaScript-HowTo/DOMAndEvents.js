const nameImput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector("#submit-button");
const items = document.querySelector(".items");
const errorMessage = document.querySelector('.msg');
submitButton.addEventListener('click', (e) =>{
    e.preventDefault();

    const nameValue = nameImput.value;
    const emailValue = emailInput.value;

    if (nameValue === '' || emailValue === ''){
        errorMessage.textContent = "Please fill out the fields!";
        errorMessage.classList = 'error';


        setTimeout(() => {
            errorMessage.textContent = "";
            errorMessage.classList = "";
        }, 3000);
        return;

        
    }


    const li = document.createElement('li');
    li.classList = "item";
    li.innerHTML = `Nome: ${nameValue}<br /> Email: ${emailValue}`;
    
    items.appendChild(li);

    nameImput.value = '';
    emailInput.value = "";
})


