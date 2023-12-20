// console.log(window); pour voir toutes les fonctions que l'on peut faire avec JS

// Single elements selector
// document.getElementById('my-form');


// Multiple elements seletor

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items')

// // ul.remove();

// ul.lastElementChild.remove();

// ul.firstElementChild.textContent = "Hello";

// ul.children[1].innerText = "Julien";

// ul.lastElementChild.innerHTML = "<h1>TITRE</h1>";


// const btn = document.querySelector('.btn')

// btn.style.background = 'green'; 


//////////// EVENEMENTS


// const btn = document.querySelector('.btn')

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e);
//     document.querySelector('#my-form').style.background = "#ccc"
//     document.querySelector('body').classList.add('bg-dark');
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    console.log(nameInput.value);

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields'
        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //Clear fields

        nameInput.value = '';
        emailInput.value = '';
    }

}