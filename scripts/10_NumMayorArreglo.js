/* Crear una función que encuentre el número más grande en un arreglo. */

function encontrarMayor() {
    let cantidad = parseInt(prompt("Cantidad de números: "));
    let arreglo = [];

    // Pedir números
    for (let i = 0; i < cantidad; i++) {
        let numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
        arreglo.push(numero);
    }

    // Encontrar mayor
    let mayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }

    return mayor;
}

let resultado = encontrarMayor();
console.log("El número más grande es:", resultado);
