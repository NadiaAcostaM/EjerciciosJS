/* Crear una función que resuelva el problema de la Torre de Hanoi. */

function torreDeHanoi(n, origen, auxiliar, destino) {
  if (n === 1) {
    console.log(`Mover disco 1 de ${origen} a ${destino}`);
    return;
  }

  // Mover n-1 discos a la torre auxiliar
  torreDeHanoi(n - 1, origen, destino, auxiliar);

  // Mover el disco más grande al destino
  console.log(`Mover disco ${n} de ${origen} a ${destino}`);

  // Mover los n-1 discos de la torre auxiliar al destino
  torreDeHanoi(n - 1, auxiliar, origen, destino);
}

let discos = parseInt(prompt("¿Cuántos discos deseas usar?"));
torreDeHanoi(discos, "A", "B", "C");
