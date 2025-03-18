'use strict';

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
let vegetables = [];

console.log(fruits);
console.log(`Length of the Fruits array: ${fruits.length}`);
console.log(`Element at index 2: ${fruits[2]}`);
console.log(`Last element of Fruits: ${fruits[fruits.length - 1]}`);

for (let i = 0; i < 3; i++) {
    let vegetable = prompt(`Enter vegetable #${i + 1}:`);
    vegetables.push(vegetable);
}
console.log(vegetables);
console.log(`Length of the Vegetables array: ${vegetables.length}`);