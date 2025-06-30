/* Crear una función que calcule el factorial de un número. */

function factorial(numero) {
    let resultado = 1;

    if (numero < 0) {
        return "El factorial no está definido para números negativos.";
    }

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

let numero = parseInt(prompt("Ingresa un número:"));
let resultado = factorial(numero);
console.log("El factorial es:", resultado);
