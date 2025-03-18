'use strict';

console.log('JS recap1 task 1');
const celsius = parseFloat(prompt('Please, provide a temperature in celsius'));
const fahrenheit = (celsius * 9/5) + 32;
const kelvin = celsius + 273.15;

document.querySelector('#target').innerHTML = `Provided Celsius: ${celsius}ºC<br>Celsius in Fahrenheit: ${fahrenheit}ºF<br>Celsius in Kelvin: ${kelvin}K`;
