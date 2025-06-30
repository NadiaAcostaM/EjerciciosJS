/* Crear una función que genere un objeto con estadísticas (media, mediana, moda) de un arreglo de números. */

function calcularEstadisticas(numeros) {
  // Calcular la media (promedio)
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  let media = suma / numeros.length;

  // Calcular la mediana
  let ordenados = [...numeros].sort((a, b) => a - b);
  let mitad = Math.floor(ordenados.length / 2);
  let mediana;
  if (ordenados.length % 2 === 0) {
    mediana = (ordenados[mitad - 1] + ordenados[mitad]) / 2;
  } else {
    mediana = ordenados[mitad];
  }

  // Calcular la moda
  let frecuencias = {};
  let maxFrecuencia = 0;
  let modas = [];

  numeros.forEach(num => {
    frecuencias[num] = (frecuencias[num] || 0) + 1;
    if (frecuencias[num] > maxFrecuencia) {
      maxFrecuencia = frecuencias[num];
    }
  });

  for (let num in frecuencias) {
    if (frecuencias[num] === maxFrecuencia) {
      modas.push(Number(num));
    }
  }

  // Si todos los números tienen la misma frecuencia, no hay moda
  if (modas.length === Object.keys(frecuencias).length) {
    modas = [];
  }

  return {
    media: media,
    mediana: mediana,
    moda: modas
  };
}

let numeros = [];
let cantidad;
cantidad = parseInt(prompt("Candidad de números:"));

for (let i = 0; i < cantidad; i++) {
  let numero = parseInt(prompt("Ingrese el número " + (i+1)));
  numeros.push(numero);
}

let estadisticas = calcularEstadisticas(numeros);
console.log(estadisticas);