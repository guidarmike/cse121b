/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}
function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    const multiplyNumber1 = parseFloat(document.querySelector('#factor1').value);
    const multiplyNumber2 = parseFloat(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;
const divideNumbers = () => {
    const divideNumber1 = parseFloat(document.getElementById('dividend').value);
    const divideNumber2 = parseFloat(document.getElementById('divisor').value);
    document.getElementById('quotient').value = divide(divideNumber1, divideNumber2);
}
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById('year').textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').textContent = numbersArray.join(', ');

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.querySelector('#odds').textContent = oddNumbers.join(', ');

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').textContent = evenNumbers.join(', ');

/* Output Sum of Org. Array */
const sumArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfArray').textContent = sumArray;

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
const sumMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfMultiplied').textContent = sumMultiplied;

