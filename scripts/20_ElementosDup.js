/* Crear una función que elimine elementos duplicados de un arreglo. */

function eliminarDuplicados() {
    let cantidad = parseInt(prompt("¿Cuántos números quieres ingresar?"));
    let arreglo = [];

    // Pedir los números
    for (let i = 0; i < cantidad; i++) {
        let numero = parseFloat(prompt("Ingresa el número " + (i + 1) + ":"));
        arreglo.push(numero);
    }

    // Eliminar duplicados
    let resultado = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (!resultado.includes(arreglo[i])) {
            resultado.push(arreglo[i]);
        }
    }

    return resultado;
}

let arregloSinDuplicados = eliminarDuplicados();
console.log("Arreglo sin duplicados:", arregloSinDuplicados);
