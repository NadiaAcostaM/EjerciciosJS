/* Crear una función que determine si un número es par o impar. */

function esPar(numero) {
    if(numero % 2 === 0) {
        return "Es par";
    } else {
        return "Es imapar";
    }
}

let numero = parseInt(prompt("Ingresa un número: "));
let respuesta = esPar(numero);
console.log(respuesta);