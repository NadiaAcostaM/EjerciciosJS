/* Crear una función que cuente la cantidad de vocales en una cadena. */

function numeroVocales() {
    let palabra = prompt("Ingrese una palabra:");
    let contador = 0;
    let vocales = "aeiouAEIOU";

    for (let i = 0; i < palabra.length; i++) {
        if (vocales.indexOf(palabra[i]) !== -1) {
            contador++;
        }
    }

    return contador;
}

let resultado = numeroVocales();
console.log("Cantidad de vocales:", resultado);