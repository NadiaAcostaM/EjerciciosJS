/* Crear un generador de tarjetas de felicitación personalizadas. */

function customCard() {
    const destinatario = prompt("¿Para quién es la tarjeta?");
    const mensaje = prompt("Escribe un mensaje de felicitación:");
    const remitente = prompt("¿Quién la envía?");

    if(!destinatario || !mensaje || !remitente) {
        alert("¡Rellene todos los campos!");
    } else {
        alert(`🎉 Para: ${destinatario}\n${mensaje}\n💌 Con cariño, ${remitente}`);
    }
}

customCard();