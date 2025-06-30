/* Crear una función que sume todos los números en un arreglo. */

function sumaArray() {
    let cantidad = parseInt(prompt("¿Cuántos números quieres ingresar?"));
    let arreglo = [];

    // Pedir al usuario
    for (let i = 0; i < cantidad; i++) {
        let numero = parseFloat(prompt("Ingresa el número " + (i + 1) + ":"));
        arreglo.push(numero);
    }

    // Suma de elementos del array
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }

    return suma;
}

let resultado = sumaArray();
console.log("La suma de los números es:", resultado);