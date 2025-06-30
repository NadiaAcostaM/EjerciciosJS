/* Crear una función que combine dos arreglos en uno solo. */

function combinar(arreglo1, arreglo2) {
    let arregloResultante = arreglo1.concat(arreglo2);
    return arregloResultante;
}

let arreglo1 = [];
let arreglo2 = [];

let cantidad1 = parseInt(prompt("¿Cuántos números quieres ingresar al arreglo 1?"));
for (let i = 0; i < cantidad1; i++) {
    let numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
    arreglo1.push(numero);
}

let cantidad2 = parseInt(prompt("¿Cuántos números quieres ingresar al arreglo 2?"));
for (let i = 0; i < cantidad2; i++) {
    let numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
    arreglo2.push(numero);
}

let resultado = combinar(arreglo1, arreglo2);
console.log("Arreglo combinado:", resultado);
