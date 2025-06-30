/* Crear una función que busque un elemento en un arreglo y devuelva su índice. */

function buscarElemento(arreglo, elemento) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === elemento) {
            return i;  // Devuelve índice si lo encuentra
        }
    }
    return -1;  // Si no lo encuentra, devuelve -1
}

let arreglo = [10, 20, 30, 40, 50];
let elementoBuscado = 30;

let indice = buscarElemento(arreglo, elementoBuscado);

console.log("Arreglo: ", arreglo);
console.log("Elemento buscado: ", elementoBuscado);

if (indice !== -1) {
    console.log("Elemento encontrado en el índice:", indice);
} else {
    console.log("Elemento no encontrado.");
}