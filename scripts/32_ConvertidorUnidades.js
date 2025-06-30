/* Crear un convertidor de unidades (por ejemplo, de kilómetros a millas). */

function convertirUnidades(valor, tipo) {
    let resultado;

    if (tipo === 1) {
        resultado = valor * 0.621371; // km a mi
    } else if (tipo === 2) {
        resultado = valor / 0.621371; // mi a km
    } else {
        resultado = null; // conversión inválida
    }

    return resultado;
}

let tipo = parseInt(prompt(
    "Selecciona el tipo de conversión:\n1. Kilómetros a Millas\n2. Millas a Kilómetros"
));

if (tipo !== 1 && tipo !== 2) {
    alert("Opción no válida. Debes ingresar 1 o 2.");
} else {
    let valor = parseFloat(prompt("Ingresa el valor que deseas convertir:"));

    if (isNaN(valor)) {
        alert("Valor inválido. Por favor, ingresa un número.");
    } else {
        let resultado = convertirUnidades(valor, tipo);
        if (tipo === 1) {
            console.log(valor + " km son " + resultado.toFixed(2) + " millas.");
        } else {
            console.log(valor + " millas son " + resultado.toFixed(2) + " km.");
        }
    }
}
