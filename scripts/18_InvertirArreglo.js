/* Crear una función que invierta un arreglo. */

function invertir(arreglo) {
    return arreglo.reverse();
}

let cantidad = parseInt(prompt("¿Cuántos números quieres ingresar?"));
let arreglo = [];

for (let i = 0; i < cantidad; i++) {
    let numero = parseFloat(prompt("Ingresa el número " + (i + 1) + ":"));
    arreglo.push(numero);
}

let arregloInvertido = invertir(arreglo);
console.log("Arreglo invertido:", arregloInvertido);
