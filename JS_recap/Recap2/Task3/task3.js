'use strict';

let numbers = [];
let evenNumbers = [];
let number;

console.log('JS_recap 2, task 3')

do {
    number = prompt("Enter a whole number (or 'done' to finish)");
    if (number === 'done') {
        alert("Thank you!");
        break;
    }
    number = parseInt(number);

    if (isNaN(number)) { // check if number is number
        alert("Provide only numbers or 'done' to quit");
    } else {
        numbers.push(number);
    }
} while (true);

for (let i = 0; i < numbers.length; i++) { // check if the number is even
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

document.querySelector('#target').innerHTML = `Provided numbers: ${numbers}<br>Even numebrs: ${evenNumbers}`;