"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('birthYear') // ищем наш единственный input
    const maskOptions = { // создаем объект параметров
        mask: '0000' // задаем единственный параметр mask
    }
    IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами
})

const button = document.getElementById('register');

const email = document.getElementById('email');
const password = document.getElementById('password');
const reEnterPassword = document.getElementById('reEnterPassword');
const birthYear = document.getElementById('birthYear');

const errorMessage =  document.getElementById('errorMessage');


button.onmouseover = check;

function check(){
    // checkBlankEmail();

    checkValidEMail();
    // checkBlankPassword();
    checkBlankReEnterPassword();
    // checkBlankBirthYear();

    checkPasswordLength();
    checkEqualPassword();

    checkValidBirthYear();
    checkAge();

    checkCheckbox();
}

const checkValidEMail = () => {
    const reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const valid = reg.test(email.value);
    document.getElementById('emailError').innerHTML = '';
    if (! valid) { 
        document.getElementById('emailError').innerHTML = 'Please enter a valid email address.';
    }
}

// const checkBlankEmail = () => {

//     document.getElementById('emailError').innerHTML = '';
//     if (email.value == '') {
//         document.getElementById('emailError').innerHTML = 'Please enter a valid email address.';
//     }
// }

// const checkBlankPassword = () => {
    
//     document.getElementById('passwordError').innerHTML = '';
//     if (password.value == '') {
//         document.getElementById('passwordError').innerHTML = 'Please enter your password.';
//     }
// }

const checkBlankReEnterPassword = () => {
    
    document.getElementById('reEnterPasswordError').innerHTML = '';
    if (reEnterPassword.value == '') {
        document.getElementById('reEnterPasswordError').innerHTML = 'Please confirm your password. <br/>';
    }
}

// const checkBlankBirthYear = () => {
    
//     document.getElementById('birthYearError').innerHTML = '';
//     if (birthYear.value == '') {
//         document.getElementById('birthYearError').innerHTML = 'Please enter your year of birth.';
//     }
// }


const checkPasswordLength = () => {
    document.getElementById('passwordError').innerHTML = '';
    if (password.value.length <= 5) {
        document.getElementById('passwordError').innerHTML += 'Your password should be at least 6 characters long.';
    }
}

const checkEqualPassword = () => {
    if (password.value != reEnterPassword.value) {
        document.getElementById('reEnterPasswordError').innerHTML += 'Please enter the same passwords in both password fields.';
    }
}

const checkValidBirthYear = () => {
    const birthYearNumber = birthYear.value;
    document.getElementById('birthYearError').innerHTML = '';
    if (birthYearNumber < 1900 || birthYearNumber >= 2022 || birthYearNumber == '') {
        document.getElementById('birthYearError').innerHTML = 'Please enter a valid birth year.';
    }
}

const checkAge = () => {
    // const birthYearNumber = birthYear.value;
    const age = 2022 - birthYear.value;

    errorMessage.innerHTML = '';
    
    if (age < 13) {
        errorMessage.classList.add("error__message_border");
        errorMessage.innerHTML = 'Sorry, you must be at least 13 years old in order to use this website.<br/>';
    }
}

const checkCheckbox = () => {
    const checkbox = document.getElementById("terms");
    errorMessage.classList.remove("error__message_border");;
    if (checkbox.checked != true) {
        errorMessage.classList.add("error__message_border");
        errorMessage.innerHTML += 'You must agree to the Steam Subscriber Agreement to continue.';
    }
}

// const button = document.getElementById('register');
// button.onmouseover = check;

// function check() {
//     const email = document.getElementById('email');
//     const password = document.getElementById('password');
//     const reEnterPassword = document.getElementById('reEnterPassword');
//     const birthYear = document.getElementById('birthYear');

//     document.getElementById('emailError').innerHTML = '';
//     document.getElementById('passwordError').innerHTML = '';
//     document.getElementById('reEnterPasswordError').innerHTML = '';
//     document.getElementById('birthYearError').innerHTML = '';

//     if (email.value == '') {
//         document.getElementById('emailError').innerHTML = 'Please enter a valid email address.';
//     }

//     if (email.value == '') {
//         document.getElementById('passwordError').innerHTML = 'Please enter your password.';
//     }

//     if (email.value == '') {
//         document.getElementById('reEnterPasswordError').innerHTML = 'Please confirm your password.';
//     }

//     if (email.value == '') {
//         document.getElementById('birthYearError').innerHTML = 'Please enter your year of birth.';
//     }
// }