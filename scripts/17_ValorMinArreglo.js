/* Crear una función que encuentre el valor mínimo en un arreglo. */

function encontrarMenor() {
    let cantidad = parseInt(prompt("¿Cuántos números quieres ingresar?"));
    let arreglo = [];

    for (let i = 0; i < cantidad; i++) {
        let numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
        arreglo.push(numero);
    }

    let menor = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < menor) {
            menor = arreglo[i];
        }
    }

    return menor;
}

let resultado = encontrarMenor();
console.log("El número menor es:", resultado);
