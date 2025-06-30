function busquedaBinaria(valorBuscado, lista) {
    let inicio = 0;    // extremo izquierdo
    let fin = lista.length - 1;   // extremo derecho
    let posicion = -1;
    let encontrado = false;
    let medio;

    while (!encontrado && inicio <= fin) {
        medio = Math.floor((inicio + fin) / 2);

        if (lista[medio] === valorBuscado) {
            encontrado = true;
            posicion = medio;
        } else if (lista[medio] > valorBuscado) {  // si está en la mitad inferior
            fin = medio - 1;
        } else {  // si está en la mitad superior
            inicio = medio + 1;
        }
    }

    return posicion;
}

let cantidad = parseInt(prompt("¿Cuántos números deseas ingresar en el arreglo?"));

let arreglo = [];

for (let i = 0; i < cantidad; i++) {
    let numero = parseInt(prompt("Ingresa el número " + (i + 1) + ":"));
    arreglo.push(numero);
}

// Ordenar el arreglo (importante para búsqueda binaria)
arreglo.sort(function(a, b) {
    return a - b;
});

let valor = parseInt(prompt("¿Qué número deseas buscar en el arreglo?"));

let resultado = busquedaBinaria(valor, arreglo);

// Mostrar resultados
if (resultado !== -1) {
    console.log("Número encontrado en la posición: " + resultado + " (empezando desde 0)");
} else {
    console.log("Número no encontrado en el arreglo.");
}

console.log("Arreglo ordenado:", arreglo);
