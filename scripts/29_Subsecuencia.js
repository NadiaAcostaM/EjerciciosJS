/* Crear una función que encuentre la subsecuencia contigua de números con la suma más grande en un arreglo. */

function maxSubsecuenciaSuma(arreglo) {
  let maxActual = arreglo[0];
  let maxGlobal = arreglo[0];
  let inicio = 0;
  let fin = 0;
  let tempInicio = 0;

  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > maxActual + arreglo[i]) {
      maxActual = arreglo[i];
      tempInicio = i;
    } else {
      maxActual += arreglo[i];
    }

    if (maxActual > maxGlobal) {
      maxGlobal = maxActual;
      inicio = tempInicio;
      fin = i;
    }
  }

  return {
    sumaMaxima: maxGlobal,
    subsecuencia: arreglo.slice(inicio, fin + 1)
  };
}

let cantidad = parseInt(prompt("¿Cuántos números deseas ingresar en el arreglo?"));
let arreglo = [];

for (let i = 0; i < cantidad; i++) {
  let numero = parseInt(prompt("Ingresa el número " + (i + 1) + ":"));
  arreglo.push(numero);
}

let resultado = maxSubsecuenciaSuma(arreglo);

console.log("Arreglo ingresado:", arreglo);
console.log("Suma máxima:", resultado.sumaMaxima);
console.log("Subsecuencia:", resultado.subsecuencia);