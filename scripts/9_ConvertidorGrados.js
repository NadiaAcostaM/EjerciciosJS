/* Crear una función que convierta grados Celsius a Fahrenheit. */

function convertir(grados) {
    // F = (C * 9/5) + 32
    let resultado = (grados * (9/5) + 32);
    return resultado;
}

let grados = parseFloat(prompt("Ingrese los grados en Celsius: "));
let resultado = convertir(grados);
console.log(grados + "°C equivalen a " + resultado + "°F");
