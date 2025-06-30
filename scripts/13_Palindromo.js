/* Crear una función que determine si una palabra es un palíndromo. */

function palindromo(palabra) {
    palabra = palabra.toLowerCase();
    let invertida = palabra.split('').reverse().join('');

    if (palabra === invertida) {
        return "Sí es un palíndromo";
    } else {
        return "No es un palíndromo";
    }
}

let palabra = prompt("Ingrese una palabra: ");
let respuesta = palindromo(palabra);
console.log(respuesta);
