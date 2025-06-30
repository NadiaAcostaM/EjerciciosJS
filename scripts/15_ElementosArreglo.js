/* Crear una función que cuente la cantidad de elementos en un arreglo. */

function contarElementos(arreglo) {
    return arreglo.length + 1;
}

let arreglo = [5, 10, 15, 20];
let cantidad = contarElementos(arreglo);
console.log(arreglo);
console.log("Cantidad de elementos:", cantidad);