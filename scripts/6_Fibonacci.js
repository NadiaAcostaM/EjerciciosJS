/* Usar bucles (for, while) para generar una serie fibonasi con un rango de numeros. */

let n = parseInt(prompt("¿Cuántos términos de la serie Fibonacci deseas?"));

let a = 0, b = 1;

console.log("Serie Fibonacci:");

for (let i = 0; i < n; i++) {
    console.log(a);
    let siguiente = a + b;
    a = b;
    b = siguiente;
}