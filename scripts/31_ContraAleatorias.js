/* Crear un generador de contraseñas aleatorias. */

function generarContrasena(longitud) {
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let contrasena = "";

    for (let i = 0; i < longitud; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[indice];
    }

    return contrasena;
}

let longitud = parseInt(prompt("¿Cuántos caracteres deseas en tu contraseña?"));

if (isNaN(longitud) || longitud < 1) {
    alert("Por favor ingresa un número válido mayor a 0.");
} else {
    let nuevaContrasena = generarContrasena(longitud);
    console.log("Contraseña:", nuevaContrasena);
}
