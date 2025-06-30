/* Crear una función que valide si una cadena de paréntesis es balanceada. */

function esBalanceado(cadena) {
    let pila = [];

    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];

        if (caracter === "(") {
            // Si es paréntesis abierto, lo guardamos en la pila
            pila.push(caracter);
        } else if (caracter === ")") {
            // Si es paréntesis cerrado, revisamos que haya uno abierto para cerrar
            if (pila.length === 0) {
                // No hay paréntesis abierto para cerrar
                return false;
            }
            pila.pop(); // Quitamos el último paréntesis abierto de la pila
        }
        // Si hay otros caracteres, los ignoramos
    }

    // Si al final la pila está vacía, están balanceados
    return pila.length === 0;
}

let cadena = prompt("Ingresa una cadena de paréntesis para validar:");

if (esBalanceado(cadena)) {
    console.log("La cadena está balanceada.");
} else {
    console.log("La cadena NO está balanceada.");
}
