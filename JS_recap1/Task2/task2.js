'use strict';

console.log('Task2 from js_recap1');

let from = prompt("Provide the coordinates of the first point, in a form of [x1,y1]");
let to = prompt("Provide the coordinates of the second point, in a form of [x2,y2]");

let [x1, y1] = from.split(',').map(Number);
let [x2, y2] = to.split(',').map(Number);

let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
document.querySelector('#target').innerHTML = `From [${x1},${y1}] to [${x2},${y2}] the distance is: ${distance}`;