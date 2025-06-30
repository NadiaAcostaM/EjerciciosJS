/* Crear un juego de Piedra, Papel o Tijeras. */

function obtenerEleccion() {
    const opciones = ["piedra", "papel", "tijeras"];
    const indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}

function determinarGanador(jugador, computadora) {
    if (jugador === computadora) {
        return "¡Empate!";
    } else if (
        (jugador === "piedra" && computadora === "tijeras") ||
        (jugador === "papel" && computadora === "piedra") ||
        (jugador === "tijeras" && computadora === "papel")
    ) {
        return "¡Ganaste!";
    } else {
        return "Perdiste";
    }
}

// Entrada del jugador
let eleccionJugador = prompt("Elige: piedra, papel o tijeras").toLowerCase();

// Validar la entrada
if (eleccionJugador !== "piedra" && eleccionJugador !== "papel" && eleccionJugador !== "tijeras") {
    alert("Opción no válida. Debes escribir piedra, papel o tijeras.");
} else {
    // Jugada de la computadora
    let eleccionComputadora = obtenerEleccion();

    // Resultado
    alert("Tú elegiste: " + eleccionJugador + "\nComputadora eligió: " + eleccionComputadora);
    alert(determinarGanador(eleccionJugador, eleccionComputadora));
}
