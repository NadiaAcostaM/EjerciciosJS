/* Crear una función que sume dos números. */

function suma(num1, num2) {
    return num1 + num2;
}

let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

let resultado = suma(num1, num2);
console.log("La suma es: " + resultado);