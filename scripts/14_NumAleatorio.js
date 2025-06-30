/* Crear una función que genere un número aleatorio dentro de un rango. */

function numAleatorio(rango) {
    return Math.floor(Math.random() * rango) + 1;
}

let rango = parseInt(prompt("Ingrese el rango (max): "));
let resultado = numAleatorio(rango);
console.log("Número aleatorio entre 1 y " + rango + ":", resultado);