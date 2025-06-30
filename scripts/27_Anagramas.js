/* Crear una función que determine si dos palabras son anagramas. */

function sonAnagramas(palabra1, palabra2) {
    // Convertir a minúsculas y quitar espacios
    palabra1 = palabra1.toLowerCase().replace(/\s/g, "");
    palabra2 = palabra2.toLowerCase().replace(/\s/g, "");

    // Si no tienen la misma cantidad de letras, no pueden ser anagramas
    if (palabra1.length !== palabra2.length) {
        return false;
    }

    // Ordenar las letras de ambas palabras
    let ordenada1 = palabra1.split("").sort().join("");
    let ordenada2 = palabra2.split("").sort().join("");

    // Comparar
    return ordenada1 === ordenada2;
}

let palabra1 = prompt("Ingresa la primera palabra:");
let palabra2 = prompt("Ingresa la segunda palabra:");

if (sonAnagramas(palabra1, palabra2)) {
    console.log("Sí son anagramas.");
} else {
    console.log("No son anagramas.");
}
