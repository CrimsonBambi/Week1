'use strict';

console.log('Task6 from js_recap1');
const size = parseInt(prompt('Enter a positive integer'));

let multiplicationTable = "Multiplication Table:<br>";

for (let i = 1; i <= size; i++) {    // rows of the table
    for (let j = 1; j <= size; j++) {  // columns of the table
        multiplicationTable += `${i * j}\t`; // Add each product to the table content
    }
    multiplicationTable += "<br>"; // Move to the next row
}
document.querySelector('#target').innerHTML = multiplicationTable;