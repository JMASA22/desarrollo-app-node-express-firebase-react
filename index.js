const express = require('express');
const app = express();
const admin = require('firebase-admin');
const PORT = 3000;


// Ruta al archivo JSON de credenciales
const serviceAccount = require('./config/prueba-tecnica-janams-firebase-adminsdk-dwgaf-2278c2793a.json');

// Inicializa Firebase Admin con las credenciales
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Acceder a Firebase Firestore
const db = admin.firestore();

app.get('/tasks', (req, res) => {
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

/*

Desarrollo de la API REST con Node.js y Express:

1/2. Crea un proyecto de Node.js.
Instala Express para manejar las rutas y las solicitudes HTTP.
Define las rutas y controladores para la API REST.
Configura la conexión a Firebase Firestore para interactuar con la base de datos.
Implementa las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la API para interactuar con Firestore.

3. Integración de Firebase Firestore como base de datos:
Configura una base de datos en Firebase Console.
Configura las credenciales de Firebase en tu aplicación Node.js.
Utiliza el SDK de Firebase para Node.js para interactuar con Firestore desde tu API.

4. Desarrollo de la aplicación móvil con React Native:
Configura un nuevo proyecto de React Native.
Crea componentes para la interfaz de usuario de tu aplicación.
Utiliza bibliotecas como axios o fetch para realizar solicitudes HTTP a la API que creaste.
Implementa la lógica para mostrar y manipular los datos obtenidos de la API.
Pruebas y depuración:

5. Prueba tu API REST para asegurarte de que funcione correctamente.
Prueba tu aplicación móvil en varios dispositivos y emuladores para garantizar su compatibilidad y funcionalidad.
Utiliza herramientas de depuración para identificar y corregir errores en tu código.
Documentación:

6. Documenta tu código de manera clara y concisa.
Proporciona instrucciones detalladas sobre cómo configurar y ejecutar tu aplicación.
Recuerda mantener un enfoque iterativo durante el desarrollo, realizando pruebas frecuentes y ajustando tu aplicación según sea necesario. 
También es importante seguir las mejores prácticas de codificación y seguridad en cada etapa del proceso de desarrollo. 

*/