// Les variables : String, Numbers, Boolesn, null, undefined

// const x = "Bonjour";

// console.log(x.length);

//Arrays 

// const number = new Array(1, 2, 3, 4, 5);

// const fruits = ['Apple', 'Oranges', 'Banane', 'Poire']

// console.log(number);

// console.log(fruits);

// console.log(fruits[1]);

// console.log(fruits[3]);


// fruits.push('Mangues');

// console.log(fruits);


// fruits.unshift('Fraises');

// console.log(fruits);


///////////////////

// console.log(fruits.indexOf('Banane'));

// const person = {
//     firstName: 'John',
//     lastname: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '314 rue louis lumière',
//         city: 'le havre',
//         state: 'France',
//     }
// }

// console.log(person);

// console.log(person.age);

// console.log(person.hobbies[1]);


// const todos = [
//     {
//         id: 1,
//         text: 'tache numéro 1',
//         isCompleted: true
//     },

//     {
//         id: 2,
//         text: 'tache a faire 2',
//         isCompleted: true
//     },

//     {
//         id: 3,
//         text: 'Rendez vous test 1',
//         isCompleted: false
//     },
// ];

// console.log(todos);

// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);

// console.log(todoJSON);


// LA BOUCHE FOR

// for (let i = 0; i <= 10; i++) {
//     console.log(`For loop numbers: ${i}`);
// }


// LA BOUCLE WHILE

// let i = 0;

// while (i < 10) {
//     console.log(`While loop numbers: ${i}`);
//     i++;
// }


// LA BOUCLE DANS UN ARRAY


// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }

// for (let todo of todos) {
//     console.log(todo.id);
// }

////////// forEach; map, filter

// todos.forEach(function (todo) {
//     console.log(todo.text)
// });

// const todoText = todos.map(function (todo) {
//     return todo.text;
// });
// console.log(todoText);

// const todoCompleted = todos.filter(function (todo) {
//     return todo.isCompleted === true;
// });

// console.log(todoCompleted);


// const todoCompleted = todos.filter(function (todo) {
//     return todo.isCompleted === true;
// }).map(function (todo) {
//     return todo.text;
// })

// console.log(todoCompleted);




//////////////// LES CONDITIONS

// const x = 110;
// const y = 10;
// if (x === 10) {
//     console.log("x is 10")
// }
// else if (x <= 120) {
//     console.log('x est entre 0 et 120');
// }
// else {
//     console.log('x is above 120');
// }


// const x = 8;
// const y = 10;

// if (x > 5 || y > 10) {
//     console.log('x is more tahn 5 or i smore than 10')
// }



////////// OPERATEUR TERNAIRES 

// const x = 15;

// const color = x > 10 ? 'red' : 'blue';

// console.log(color);

// switch (color) {
//     case 'red':
//         console.log('Color is red');
//         break;

//     case 'blue':
//         console.log('Color is blue');
//         break
//     default:
//         console.log('Color is Not red or blue');
//         break;
// }



////////// LES FONCTIONS 

// num1 et num2 sont les paramètres de la fonction
// Ensuite je dois appeler la fonction

// function addNumbers(num1, num2) {
//     console.log(num1 + num2)
// }

//appel de la fonction
// addNumbers(5, 4);

// function addNumbers(num1 = 1, num2 = 2) {
//     return num1 + num2
// }

// //appel de la fonction
// console.log(addNumbers(5, 5));




///////////////// PROGRAMMATION ORIENTE OBJET JS


//Constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function () {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function () {
//     return this.dob.getFullName();
// }

/// Classes

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return this.dob.getFullName();
//     }
// }

// //instancier un objet
// const person1 = new Person('Julien', 'LACH', '7-31-1996');
// const person2 = new Person('Mary', 'Smith', '5-12-1975');

// // console.log(person1.getBirthYear());
// // console.log(person1.getFullName());

// console.log(person1);


///////////////// DOM MANIPULATION

// DOM = Document object model  = c'est toute la structure de notre HTML
