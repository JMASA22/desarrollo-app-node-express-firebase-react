/*

- Este archivo es el punto de entrada principal de la aplicación Node.js.
- Configura y inicializa el servidor Express.
- Conecta la aplicación a Firebase Firestore utilizando las credenciales proporcionadas.
- Define el puerto en el que se ejecutará el servidor y lo hace escuchar en ese puerto.

*/

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

4. Desarrollar app móvil con React Native:
Configurar un nuevo proyecto de React Native CLI
Crea componentes para la interfaz de usuario. (plantilla tabs (TypeScript))

Si has integrado Firebase Firestore como tu base de datos y necesitas realizar solicitudes HTTP a la API que creaste para interactuar con Firestore, no necesariamente tendrás que utilizar bibliotecas como Axios o la función fetch de JavaScript.
Firebase proporciona su propia biblioteca para interactuar con Firestore de una manera más directa y fácil de usar.

5. Pruebas y depuración:

6. Documentación:

*/

