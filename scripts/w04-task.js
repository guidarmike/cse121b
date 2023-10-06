/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Michele Gudiara",
    photo: "images/placeholder.jpg",
    favoriteFoods: [
        'Sushi',
        'Pizza',
        'Tiramisù',
        'Fried Rice',
        'Tacos'
    ],
    hobbies: ['Videogames', 'Reading', 'Listeing to music'],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Rome, Italy',
        length: '23 years'
    },
    {
        place: 'Preston, England',
        length: '2 months'
    },
    {
        place: 'Milan, Italy',
        length: '8 months'
    },
    {
        place: 'Seattle, WA',
        length: '3 months'
    },
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
let photoElement = document.querySelector('#photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    let dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
});