// Función para agregar una tarea
function agregarTarea() {
    const titulo = document.getElementById('titulo-tarea').value;
    const descripcion = document.getElementById('descripcion-tarea').value;

    // Crear una instancia de XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Especificar la URL y el método HTTP
    xhr.open('POST', 'agregar_tarea.php', true);

    // Establecer el encabezado de la solicitud
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    // Definir lo que sucede en la respuesta
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Limpiar el formulario
            document.getElementById('titulo-tarea').value = '';
            document.getElementById('descripcion-tarea').value = '';

            // Cargar las tareas actualizadas
            cargarTareas();
        } else {
            console.error('Error al agregar la tarea:', xhr.statusText);
        }
    };

    // Definir lo que sucede en caso de error
    xhr.onerror = function() {
        console.error('Error de red al agregar la tarea');
    };

    // Enviar la solicitud con los datos de la tarea
    xhr.send('titulo=' + encodeURIComponent(titulo) + '&descripcion=' + encodeURIComponent(descripcion));
}
