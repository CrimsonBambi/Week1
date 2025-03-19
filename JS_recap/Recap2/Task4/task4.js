'use strict';

console.log('JS recap2 task 4')
const numbers = ['4', '6','2','1','7'];

function sorting(array) {
    let sortedArray = array.slice().sort((a, b) => a - b); //copies numbers array, and sorts it into a new array in ascending order
    return sortedArray; 
}

const sortedArray = sorting(numbers);

document.querySelector('#target').innerHTML = `An array before: ${numbers}<br> The array in ascending order: ${sortedArray}`;