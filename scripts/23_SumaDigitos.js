/* Crear una función que calcule la suma de los dígitos de un número. */

function sumaDigitos() {
    let numero = parseInt(prompt("Ingresa un número:"));
    let suma = 0;
    let texto = numero.toString();

    for (let i = 0; i < texto.length; i++) {
        suma += parseInt(texto[i]);
    }

    return suma;
}

let resultado = sumaDigitos();
console.log("La suma de los dígitos es:", resultado);
