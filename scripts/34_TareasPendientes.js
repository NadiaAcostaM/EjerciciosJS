/* Crear un contador de tareas pendientes. */

function contadorTareas() {
    // Crear elementos HTML
    const modal = document.createElement('div');
    const contenidoModal = document.createElement('div');
    const titulo = document.createElement('h2');
    const listaTareas = document.createElement('ul');
    const entrada = document.createElement('input');
    const botonAgregar = document.createElement('button');
    const botonLimpiar = document.createElement('button');
    const contador = document.createElement('p');
    const botonCerrar = document.createElement('button');

    // Configurar modal
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = 'white';
    modal.style.padding = '20px';
    modal.style.borderRadius = '10px';
    modal.style.boxShadow = '0 0 15px rgba(0,0,0,0.2)';
    modal.style.zIndex = '1000';
    modal.style.width = '350px';
    modal.style.maxHeight = '80vh';
    modal.style.overflowY = 'auto';

    // Estilos para el contenido
    contenidoModal.style.display = 'flex';
    contenidoModal.style.flexDirection = 'column';
    contenidoModal.style.gap = '15px';

    // Configurar elementos
    titulo.textContent = '📝 Tareas Pendientes';
    titulo.style.margin = '0 0 10px 0';
    titulo.style.textAlign = 'center';
    titulo.style.color = '#333';

    entrada.type = 'text';
    entrada.placeholder = 'Escribe una nueva tarea...';
    entrada.style.padding = '8px';
    entrada.style.borderRadius = '4px';
    entrada.style.border = '1px solid #ddd';

    botonAgregar.textContent = '➕ Agregar';
    botonAgregar.style.padding = '8px';
    botonAgregar.style.backgroundColor = '#4CAF50';
    botonAgregar.style.color = 'white';
    botonAgregar.style.border = 'none';
    botonAgregar.style.borderRadius = '4px';
    botonAgregar.style.cursor = 'pointer';

    botonLimpiar.textContent = '🧹 Limpiar completadas';
    botonLimpiar.style.padding = '8px';
    botonLimpiar.style.backgroundColor = '#f44336';
    botonLimpiar.style.color = 'white';
    botonLimpiar.style.border = 'none';
    botonLimpiar.style.borderRadius = '4px';
    botonLimpiar.style.cursor = 'pointer';
    botonLimpiar.style.marginTop = '10px';

    contador.textContent = '0 tareas pendientes';
    contador.style.textAlign = 'center';
    contador.style.margin = '10px 0 0 0';
    contador.style.fontWeight = 'bold';

    botonCerrar.textContent = 'Cerrar';
    botonCerrar.style.padding = '8px';
    botonCerrar.style.backgroundColor = '#555';
    botonCerrar.style.color = 'white';
    botonCerrar.style.border = 'none';
    botonCerrar.style.borderRadius = '4px';
    botonCerrar.style.cursor = 'pointer';
    botonCerrar.style.marginTop = '10px';

    // Función para actualizar la lista
    function actualizarListaTareas() {
        listaTareas.innerHTML = '';
        listaTareas.style.paddingLeft = '0';
        listaTareas.style.margin = '0';
        const tareasPendientes = tareas.filter(tarea => !tarea.completada);
        contador.textContent = `${tareasPendientes.length} ${tareasPendientes.length === 1 ? 'tarea pendiente' : 'tareas pendientes'}`;

        tareas.forEach((tarea, indice) => {
            const elementoLista = document.createElement('li');
            elementoLista.style.display = 'flex';
            elementoLista.style.alignItems = 'center';
            elementoLista.style.padding = '8px 0';
            elementoLista.style.borderBottom = '1px solid #eee';

            const casillaVerificacion = document.createElement('input');
            casillaVerificacion.type = 'checkbox';
            casillaVerificacion.checked = tarea.completada;
            casillaVerificacion.style.marginRight = '10px';
            casillaVerificacion.style.cursor = 'pointer';

            const textoTarea = document.createElement('span');
            textoTarea.textContent = tarea.texto;
            textoTarea.style.flexGrow = '1';
            textoTarea.style.textDecoration = tarea.completada ? 'line-through' : 'none';
            textoTarea.style.color = tarea.completada ? '#888' : '#333';

            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = '❌';
            botonEliminar.style.background = 'none';
            botonEliminar.style.border = 'none';
            botonEliminar.style.cursor = 'pointer';
            botonEliminar.style.color = '#ff5555';

            // Event listeners
            casillaVerificacion.addEventListener('change', () => {
                tareas[indice].completada = casillaVerificacion.checked;
                actualizarListaTareas();
            });

            botonEliminar.addEventListener('click', () => {
                tareas.splice(indice, 1);
                actualizarListaTareas();
            });

            elementoLista.appendChild(casillaVerificacion);
            elementoLista.appendChild(textoTarea);
            elementoLista.appendChild(botonEliminar);
            listaTareas.appendChild(elementoLista);
        });
    }

    // Array de tareas
    let tareas = [];

    // Event listeners
    botonAgregar.addEventListener('click', () => {
        if (entrada.value.trim()) {
            tareas.push({
                texto: entrada.value.trim(),
                completada: false
            });
            entrada.value = '';
            actualizarListaTareas();
        }
    });

    entrada.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && entrada.value.trim()) {
            tareas.push({
                texto: entrada.value.trim(),
                completada: false
            });
            entrada.value = '';
            actualizarListaTareas();
        }
    });

    botonLimpiar.addEventListener('click', () => {
        tareas = tareas.filter(tarea => !tarea.completada);
        actualizarListaTareas();
    });

    botonCerrar.addEventListener('click', () => {
        document.body.removeChild(modal);
        document.body.removeChild(fondoModal);
    });

    // Juntar todos los elementos
    contenidoModal.appendChild(titulo);
    contenidoModal.appendChild(entrada);
    contenidoModal.appendChild(botonAgregar);
    contenidoModal.appendChild(listaTareas);
    contenidoModal.appendChild(botonLimpiar);
    contenidoModal.appendChild(contador);
    contenidoModal.appendChild(botonCerrar);
    modal.appendChild(contenidoModal);
    document.body.appendChild(modal);

    // Fondo modal
    const fondoModal = document.createElement('div');
    fondoModal.style.position = 'fixed';
    fondoModal.style.top = '0';
    fondoModal.style.left = '0';
    fondoModal.style.width = '100%';
    fondoModal.style.height = '100%';
    fondoModal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    fondoModal.style.zIndex = '999';
    document.body.appendChild(fondoModal);

    // Cerrar al hacer clic fuera
    fondoModal.addEventListener('click', () => {
        document.body.removeChild(modal);
        document.body.removeChild(fondoModal);
    });

    // Inicializar
    actualizarListaTareas();
}

contadorTareas();