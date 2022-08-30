const submitButton = document.querySelector('.btn');
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const items = document.querySelector('.items');

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    // console.log('The button was clicked!');

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if(nameValue === '' || emailValue === '') {
        return alert('Please fill out all the fields');
    }

    // form submitted sucessfully 
    myForm.style.background = 'green';
    alert('Form submitted');

    // Add name and email to list
    items.firstElementChild.textContent = nameValue;
    items.children[1].textContent = emailValue;

});