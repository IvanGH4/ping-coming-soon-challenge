const emailInput = document.querySelector('#email');
const btn = document.querySelector('#btn');
const validatorEl = document.querySelector('.validator');

btn.addEventListener('click', () => validateEmail(emailInput.value));

const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

function validateEmail(val) {
    if (emailRegex.test(val)){
        validatorEl.classList.remove('active');
        emailInput.classList.remove('active');
    } else {
        validatorEl.classList.add('active');
        emailInput.classList.add('active');
    }
}