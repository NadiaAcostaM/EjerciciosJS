/* Crear un reloj digital. */

function reloj() {
    const mainDocument = window.top.document;

    // Eliminar modal existente si hay
    const existingModal = mainDocument.getElementById('reloj-modal');
    const existingBackdrop = mainDocument.getElementById('reloj-backdrop');
    if (existingModal) mainDocument.body.removeChild(existingModal);
    if (existingBackdrop) mainDocument.body.removeChild(existingBackdrop);

    // Crear backdrop
    const backdrop = mainDocument.createElement('div');
    backdrop.id = 'reloj-backdrop';
    backdrop.style.position = 'fixed';
    backdrop.style.top = '0';
    backdrop.style.left = '0';
    backdrop.style.width = '100%';
    backdrop.style.height = '100%';
    backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    backdrop.style.zIndex = '999';

    // Crear modal
    const modal = mainDocument.createElement('div');
    modal.id = 'reloj-modal';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = 'white';
    modal.style.padding = '20px';
    modal.style.borderRadius = '10px';
    modal.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
    modal.style.zIndex = '1000';
    modal.style.textAlign = 'center';

    // Elemento del reloj
    const relojElement = mainDocument.createElement('div');
    relojElement.style.fontSize = '2em';
    relojElement.style.margin = '10px 0';

    // Botón de cerrar
    const closeButton = mainDocument.createElement('button');
    closeButton.textContent = 'Cerrar';
    closeButton.style.padding = '8px 16px';
    closeButton.style.background = '#f44336';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '4px';
    closeButton.style.cursor = 'pointer';

    // Función para actualizar el reloj
    function actualizarReloj() {
        const ahora = new Date();
        relojElement.textContent = 
            `${ahora.getHours().toString().padStart(2, '0')}:` +
            `${ahora.getMinutes().toString().padStart(2, '0')}:` +
            `${ahora.getSeconds().toString().padStart(2, '0')}`;
    }

    // Cerrar modal y backdrop
    function cerrarModal() {
        clearInterval(intervalId);
        mainDocument.body.removeChild(modal);
        mainDocument.body.removeChild(backdrop);
    }

    // Eventos
    closeButton.onclick = cerrarModal;
    backdrop.onclick = cerrarModal; // Cierra al hacer clic en el backdrop

    // Juntar todos los elementos
    modal.appendChild(relojElement);
    modal.appendChild(closeButton);
    mainDocument.body.appendChild(backdrop);
    mainDocument.body.appendChild(modal);

    // Iniciar reloj
    actualizarReloj();
    const intervalId = setInterval(actualizarReloj, 1000);
}

reloj();