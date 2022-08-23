"use strict";

const button = document.getElementById('register');

const login = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('password');
const reEnterPassword = document.getElementById('reEnterPassword');
const birthYear = document.getElementById('birthYear');

const errorMessage =  document.getElementById('errorMessage');


const check = () => {
    checkBlankLogin();
    checkValidEMail();
    checkPasswordLength();
    checkBlankReEnterPassword();
    checkEqualPassword();
    checkValidBirthYear();
    checkAge();
    checkCheckbox();

    greeting();
};

const checkBlankLogin = () => {
    document.getElementById('loginError').innerHTML = '';
    login.classList.remove("error__input");
    if (login.value === '') {
        document.getElementById('loginError').innerHTML = 'Please enter your login.';
        login.classList.add("error__input");
    }
};

const checkValidEMail = () => {
    const reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const valid = reg.test(email.value);
    document.getElementById('emailError').innerHTML = '';
    email.classList.remove("error__input");
    if (! valid) { 
        document.getElementById('emailError').innerHTML = 'Please enter a valid email address.';
        email.classList.add("error__input");
    }
};

const checkPasswordLength = () => {
    document.getElementById('passwordError').innerHTML = '';
    password.classList.remove("error__input");
    if (password.value.length <= 5) {
        document.getElementById('passwordError').innerHTML += 'Your password should be at least 6 characters long.';
        password.classList.add("error__input");
    }
};

const checkBlankReEnterPassword = () => {
    document.getElementById('reEnterPasswordError').innerHTML = '';
    reEnterPassword.classList.remove("error__input");
    if (reEnterPassword.value === '') {
        document.getElementById('reEnterPasswordError').innerHTML = 'Please confirm your password. <br/>';
        reEnterPassword.classList.add("error__input");
    }
};

const checkEqualPassword = () => {
    reEnterPassword.classList.remove("error__input");
    if (password.value != reEnterPassword.value) {
        document.getElementById('reEnterPasswordError').innerHTML += 'Please enter the same passwords in both password fields.';
        reEnterPassword.classList.add("error__input");
    }
};

const checkValidBirthYear = () => {
    const birthYearNumber = birthYear.value;
    document.getElementById('birthYearError').innerHTML = '';
    birthYear.classList.remove("error__input");
    if (birthYearNumber < 1900 || birthYearNumber >= 2022 || birthYearNumber === '') {
        document.getElementById('birthYearError').innerHTML = 'Please enter a valid birth year.';
        birthYear.classList.add("error__input");
    }
};

const checkAge = () => {
    const age = 2022 - birthYear.value;

    errorMessage.innerHTML = '';

    if (age < 13) {
        errorMessage.classList.add("error__message_border");
        errorMessage.innerHTML = 'Sorry, you must be at least 13 years old in order to use this website.<br/>';
    }
};

const checkCheckbox = () => {
    const checkbox = document.getElementById("terms");
    errorMessage.classList.remove("error__message_border");
    if (checkbox.checked !== true) {
        errorMessage.classList.add("error__message_border");
        errorMessage.innerHTML += 'You must agree to the Steam Subscriber Agreement to continue.';
    }
};

const greeting = () => {
    if ((document.getElementById('loginError').innerHTML === '') && (document.getElementById('emailError').innerHTML === '') && (document.getElementById('passwordError').innerHTML === '') && (document.getElementById('reEnterPasswordError').innerHTML === '') && (document.getElementById('birthYearError').innerHTML === '') && (errorMessage.innerHTML == '')) {
        alert(`Welcome to the website, ${login.value}!`);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('birthYear') // ищем наш единственный input
    const maskOptions = { // создаем объект параметров
        mask: '0000' // задаем единственный параметр mask
    }
    IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами
});

button.addEventListener('click', check);
