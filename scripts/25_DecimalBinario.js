/* Crear una función que convierta un número decimal a binario. */

function convertir(numero) {
    return numero.toString(2);
}

let numero = parseInt(prompt("Ingrese un número:"));
let resultado = convertir(numero);
console.log("El número en binario es: " + resultado);
