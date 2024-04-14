<?php
$db = new mysqli('localhost', 'root', '', 'task_management');

// Verificar la conexión
if ($db->connect_error) {
    die("Error de conexión: " . $db->connect_error);
}

// Obtener los datos de la solicitud POST
$titulo = $_POST['titulo'];
$descripcion = $_POST['descripcion'];

// Consulta SQL para insertar la tarea
$sql = "INSERT INTO tasks (title, description) VALUES ('$titulo', '$descripcion')";

// Ejecutar la consulta SQL
if ($db->query($sql) === TRUE) {
    echo "Tarea agregada correctamente";
} else {
    echo "Error al agregar la tarea: " . $db->error;
}

// Cerrar la conexión a la base de datos
$db->close();
?>
