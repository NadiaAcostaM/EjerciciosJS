/* Crear un juego de adivinar el número secreto. */

const LIMITE_INFERIOR = 1;     // número más pequeño posible
const LIMITE_SUPERIOR = 100;   // número más grande posible
const INTENTOS_MAX = 10;       // cuántos intentos tiene el jugador

// Generar un número secreto aleatorio entre LIMITE_INFERIOR y LIMITE_SUPERIOR
const numeroSecreto = Math.floor(Math.random() * (LIMITE_SUPERIOR - LIMITE_INFERIOR + 1)) + LIMITE_INFERIOR;

let intentos = 0;
let adivinado = false;

alert(`¡Bienvenido al juego!\n
Tengo un número secreto entre ${LIMITE_INFERIOR} y ${LIMITE_SUPERIOR}.
Tienes ${INTENTOS_MAX} intentos para adivinarlo. ¡Suerte!`);

while (!adivinado && intentos < INTENTOS_MAX) {
    let respuesta = prompt(`Intento ${intentos + 1} de ${INTENTOS_MAX}\nIntroduce un número entre ${LIMITE_INFERIOR} y ${LIMITE_SUPERIOR}:`);

    // Cancelar o dejar vacío sale del juego
    if (respuesta === null || respuesta.trim() === "") {
        alert("Has cancelado el juego. ¡Hasta la próxima!");
        break;
    }

    let numero = parseInt(respuesta);

    // Validar entrada
    if (isNaN(numero) || numero < LIMITE_INFERIOR || numero > LIMITE_SUPERIOR) {
        alert("Debes escribir un número válido dentro del rango.");
        continue; // No cuenta como intento
    }

    intentos++;

    if (numero === numeroSecreto) {
        alert(`¡Felicidades! Adivinaste el número en ${intentos} intento(s).`);
        adivinado = true;
    } else if (numero < numeroSecreto) {
        alert("Demasiado bajo… Intenta con un número mayor.");
    } else {
        alert("Demasiado alto… Intenta con un número menor.");
    }
}

if (!adivinado && intentos >= INTENTOS_MAX) {
    alert(`Se te acabaron los intentos.\nEl número secreto era ${numeroSecreto}.`);
}