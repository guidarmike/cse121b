/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Michele Guidara'
const currentYear = new Date().getFullYear();
const profilePicture = 'images/placeholder.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

let myImg = document.getElementsByTagName('img');
let imageElement = myImg[0].setAttribute('src', profilePicture);
myImg[0].setAttribute('alt', `${profilePicture}`);
myImg[0].setAttribute('title', `${profilePicture}`);

/* Step 5 - Array */
let foodArray = ["Pinsa","Tacos","Tiramisù","Carobonara"]
let newFood = "Sushi";

let foods = foodArray.length;
console.log(typeof (index));
foodArray.map((item, index) => {
    index < foods - 1 ? foodElement.innerHTML += `<strong>${item}</strong>, ` : foodElement.innerHTML += ` <strong>${item}</strong>,<br>`;
});

foodArray.push(newFood);
foodArray.map((item, index) => {
    index < foods ? foodElement.innerHTML += `<em>${item}</em>,` : foodElement.innerHTML += ` ${item},<br>`;
});
foodArray.shift();
foodArray.map((item, index) => {
    index < foods - 1 ? foodElement.innerHTML += `<em>${item}</em>,` : foodElement.innerHTML += ` ${item},<br>`;
});
foodArray.pop();
foodArray.map((item, index) => {
    index < foods - 2 ? foodElement.innerHTML += `<em>${item}</em>,` : foodElement.innerHTML += ` ${item},<br>`;
});