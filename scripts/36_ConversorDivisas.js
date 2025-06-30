/* Crear un conversor de divisas. */

function convertirDivisa(monto, origen, destino) {
    // Tasas fijas
    const tasas = {
        "MXN": { "USD": 0.053, "EUR": 0.045 },
        "USD": { "MXN": 18.82, "EUR": 0.85 },
        "EUR": { "MXN": 22.06, "USD": 1.17 }
    };

    if (origen === destino) {
        return monto; // misma divisa
    }

    if (tasas[origen] && tasas[origen][destino]) {
        return monto * tasas[origen][destino];
    } else {
        return null; // conversión no soportada
    }
}

let monto = parseFloat(prompt("Ingresa la cantidad a convertir:"));

if (isNaN(monto) || monto < 0) {
    alert("Por favor, ingresa una cantidad válida.");
} else {
    let origen = prompt("Moneda origen (MXN, USD, EUR):").toUpperCase();
    let destino = prompt("Moneda destino (MXN, USD, EUR):").toUpperCase();

    let resultado = convertirDivisa(monto, origen, destino);

    if (resultado === null) {
        alert("Conversión no disponible.");
    } else {
        console.log(`${monto} ${origen} equivale a ${resultado.toFixed(2)} ${destino}`);
    }
}
