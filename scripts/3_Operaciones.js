/* Realizar operaciones matemáticas simples (suma, resta, multiplicación, división). */

let num1;
let num2;

num1 = parseFloat(prompt("Ingresa el número 1: "));
num2 = parseFloat(prompt("Ingresa el número 2: "));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

console.log("Suma: ", suma);
console.log("Resta: ", resta);
console.log("Multiplicación: ", multiplicacion);
console.log("División: ", division);