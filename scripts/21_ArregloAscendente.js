/* Crear una función que ordene un arreglo de números de forma ascendente. */

function ordenarAscendente(arreglo) {
    let n = arreglo.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arreglo[j] > arreglo[j + 1]) {
                // Intercambio
                let temp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temp;
            }
        }
    }

    return arreglo;
}

let cantidad = parseInt(prompt("¿Cuántos números quieres ingresar?"));
let arreglo = [];

for (let i = 0; i < cantidad; i++) {
    let numero = parseFloat(prompt("Ingresa el número " + (i + 1) + ":"));
    arreglo.push(numero);
}

let arregloOrdenado = ordenarAscendente(arreglo);
console.log("Arreglo ordenado de forma ascendente:", arregloOrdenado);
