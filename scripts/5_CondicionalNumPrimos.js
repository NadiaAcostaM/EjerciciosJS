/* Usar condicionales (if, else) para validar numeros primos. */

let numero;
let esPrimo = true;

numero = parseInt(prompt("Ingrese un número: "));

if (numero > 1) {
    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log("Es número primo");
    } else {
        console.log("No es número primo");
    }
} else {
    console.log("El " + numero + " no es un número primo");
}
