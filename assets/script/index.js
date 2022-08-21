"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('birthYear') // ищем наш единственный input
    const maskOptions = { // создаем объект параметров
        mask: '1000' // задаем единственный параметр mask
    }
    IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами
})

const button = document.getElementById('register');
button.addEventListener('mouseover', () => {
    const email = document.getElementById('email');
    document.getElementById('emailError').innerHTML = '';
    if (email.value == '') {
        document.getElementById('emailError').innerHTML = 'Please enter a valid email address.';
    }
});

button.addEventListener('mouseover', () => {
    const password = document.getElementById('password');
    document.getElementById('passwordError').innerHTML = '';
    if (email.value == '') {
        document.getElementById('passwordError').innerHTML = 'Please enter your password.';
    }
});

button.addEventListener('mouseover', () => {
    const reEnterPassword = document.getElementById('reEnterPassword');
    document.getElementById('reEnterPasswordError').innerHTML = '';
    if (email.value == '') {
        document.getElementById('reEnterPasswordError').innerHTML = 'Please confirm your password.';
    }
});

button.addEventListener('mouseover', () => {
    const birthYear = document.getElementById('birthYear');
    document.getElementById('birthYearError').innerHTML = '';
    if (email.value == '') {
        document.getElementById('birthYearError').innerHTML = 'Please enter your year of birth.';
    }
});



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