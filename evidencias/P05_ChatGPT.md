# Respuesta prompt débil

¡Claro! Puedo crear una API desde cero, con endpoints, lógica, validaciones y documentación.

**¿Qué tipo de API necesitas?** Mientras me lo dices, puedo adaptar la estructura y el código a tu proyecto.

## **Configura tu API**

Elige las opciones que mejor se adapten a tu proyecto. Puedes dejar los valores predeterminados.

1\. Tipo de API

REST API — estándar para aplicaciones web y móviles

GraphQL — consultas flexibles de datos

WebSocket — comunicación en tiempo real

2\. ¿Para qué servirá?

Usuarios, registro e inicio de sesión

Tienda online, productos y pedidos

Inteligencia artificial y modelos de IA

Consultar y guardar datos

Otro proyecto

3\. Lenguaje y framework

Python + FastAPI

Node.js + Express

TypeScript + NestJS

Java + Spring Boot

4\. Base de datos

PostgreSQL

MySQL

MongoDB

Sin base de datos por ahora

5\. Autenticación

JWT — tokens de acceso

API Key — clave de acceso

OAuth 2.0 — acceso delegado

Sin autenticación

Crear mi API

Si ya tienes una idea concreta, también puedes describírmela directamente en una frase y te preparo el código.

# Respuesta prompt fuerte

# **Diseño de una API REST para una tienda de videojuegos**

## **1. Introducción**

Se propone diseñar una API REST para gestionar las reservas de videojuegos de una tienda. La API permitirá consultar el catálogo, registrar videojuegos, gestionar clientes y crear, consultar, modificar y cancelar reservas.

El diseño está pensado para un proyecto de **2.º de Desarrollo de Aplicaciones Web (DAW)**, por lo que se prioriza la sencillez, el uso correcto de los métodos HTTP y una documentación clara, sin incorporar tecnologías innecesarias.

### **Objetivos**

- Identificar los recursos principales de la aplicación.
- Definir las rutas y operaciones HTTP.
- Establecer los formatos de entrada y salida JSON.
- Utilizar códigos de estado HTTP adecuados.
- Explicar las relaciones entre videojuegos, clientes y reservas.
- Definir validaciones y respuestas de error.

## **2. Recursos principales**

La API utilizará tres recursos principales:

**Videojuegos** — `/api/videojuegos`

Almacena el catálogo de juegos disponibles en la tienda: título, plataforma, género, precio y unidades disponibles.

**Clientes** — `/api/clientes`

Contiene los datos básicos de las personas que pueden realizar reservas.

**Reservas** — `/api/reservas`

Registra qué cliente reserva qué videojuego, la fecha de reserva, la fecha prevista de recogida y su estado.

La API tendrá como prefijo `/api` y utilizará JSON para recibir y devolver información.

## **3. Modelo de datos**

### **Videojuego**

| Campo                 | Tipo    | Descripción                                  |
| --------------------- | ------- | -------------------------------------------- |
| `id`                  | Entero  | Identificador único, generado por el sistema |
| `titulo`              | Texto   | Nombre del videojuego                        |
| `plataforma`          | Texto   | PS5, Xbox, Nintendo Switch, PC, etc.         |
| `genero`              | Texto   | Acción, aventura, deportes, etc.             |
| `precio`              | Decimal | Precio del videojuego                        |
| `unidadesDisponibles` | Entero  | Unidades que se pueden reservar              |

### **Cliente**

| Campo      | Tipo   | Descripción              |
| ---------- | ------ | ------------------------ |
| `id`       | Entero | Identificador único      |
| `nombre`   | Texto  | Nombre del cliente       |
| `email`    | Texto  | Correo electrónico único |
| `telefono` | Texto  | Teléfono de contacto     |

### **Reserva**

| Campo           | Tipo         | Descripción                             |
| --------------- | ------------ | --------------------------------------- |
| `id`            | Entero       | Identificador único                     |
| `clienteId`     | Entero       | Identificador del cliente               |
| `videojuegoId`  | Entero       | Identificador del videojuego            |
| `fechaReserva`  | Fecha y hora | Momento de creación                     |
| `fechaRecogida` | Fecha        | Día previsto para recoger el juego      |
| `estado`        | Texto        | `pendiente`, `confirmada` o `cancelada` |

Los identificadores se generan automáticamente y no deben enviarse al crear un recurso.

## **4. Relaciones entre los recursos**

Una reserva relaciona un cliente con un videojuego.

**Cliente**

id

1 cliente puede tener muchas reservas

**Reserva**

id · clienteId · videojuegoId

1 videojuego puede aparecer en muchas reservas a lo largo del tiempo

**Videojuego**

id

En términos de base de datos, `clienteId` y `videojuegoId` serán claves foráneas de la tabla `Reservas`, que apuntarán a las tablas `Clientes` y `Videojuegos`, respectivamente.

Cada reserva pertenece a un solo cliente y corresponde a un solo videojuego. Un cliente puede tener varias reservas y un videojuego puede reservarse muchas veces, siempre que haya unidades disponibles.

## **5. Rutas y operaciones HTTP**

Se utilizarán los cuatro métodos solicitados: `GET`, `POST`, `PUT` y `DELETE`.

| Método | Ruta                    | Función                          | Estado habitual |
| ------ | ----------------------- | -------------------------------- | --------------- |
| GET    | `/api/videojuegos`      | Listar videojuegos               | 200             |
| GET    | `/api/videojuegos/{id}` | Consultar un videojuego          | 200             |
| POST   | `/api/videojuegos`      | Crear un videojuego              | 201             |
| PUT    | `/api/videojuegos/{id}` | Modificar un videojuego completo | 200             |
| DELETE | `/api/videojuegos/{id}` | Eliminar un videojuego           | 204             |
| GET    | `/api/clientes`         | Listar clientes                  | 200             |
| GET    | `/api/clientes/{id}`    | Consultar un cliente             | 200             |
| POST   | `/api/clientes`         | Crear un cliente                 | 201             |
| PUT    | `/api/clientes/{id}`    | Modificar un cliente completo    | 200             |
| DELETE | `/api/clientes/{id}`    | Eliminar un cliente              | 204             |
| GET    | `/api/reservas`         | Listar reservas                  | 200             |
| GET    | `/api/reservas/{id}`    | Consultar una reserva            | 200             |
| POST   | `/api/reservas`         | Crear una reserva                | 201             |
| PUT    | `/api/reservas/{id}`    | Modificar una reserva            | 200             |
| DELETE | `/api/reservas/{id}`    | Cancelar o eliminar una reserva  | 204             |

`{id}` representa el identificador del recurso que se desea consultar, modificar o eliminar.

**Consideraciones de diseño:**

- `GET` consulta datos sin modificarlos.
- `POST` crea un nuevo recurso.
- `PUT` sustituye los datos editables de un recurso existente; los campos obligatorios deben enviarse.
- `DELETE` elimina el recurso o ejecuta la operación de cancelación definida para él.

Para mantener el diseño sencillo, la cancelación de una reserva puede realizarse mediante `DELETE`. En ese caso, el sistema debe definir qué ocurre con el registro y con las unidades disponibles. Si se necesita conservar el historial, es preferible cambiar el estado a `cancelada` en lugar de borrar físicamente la reserva.

## **6. Parámetros y datos de entrada**

### **Parámetros de ruta**

| Parámetro | Tipo            | Ejemplo | Uso                                         |
| --------- | --------------- | ------- | ------------------------------------------- |
| `id`      | Entero positivo | `5`     | Identifica un videojuego, cliente o reserva |

Ejemplo de consulta:

```
GET /api/videojuegos/5
```

### **Parámetros de consulta**

Para facilitar la búsqueda, se pueden admitir filtros sencillos:

```
GET /api/videojuegos?plataforma=PS5
GET /api/reservas?clienteId=2
GET /api/reservas?estado=pendiente
```

Los filtros son opcionales. Si no se especifican, se devuelve la lista completa de recursos.

### **Cuerpo de las peticiones**

Las peticiones `POST` y `PUT` que envían datos deben utilizar:

```
Content-Type: application/json
```

El identificador no se incluye en el cuerpo cuando se crea un recurso, ya que lo genera el servidor.

## **7. Ejemplos de peticiones y respuestas**

### **7.1. Consultar el catálogo de videojuegos**

Petición:

```
GET /api/videojuegos
```

Respuesta `200 OK`:

```
[
  {
    "id": 1,
    "titulo": "The Legend of Zelda: Tears of the Kingdom",
    "plataforma": "Nintendo Switch",
    "genero": "Aventura",
    "precio": 59.99,
    "unidadesDisponibles": 3
  },
  {
    "id": 2,
    "titulo": "EA Sports FC",
    "plataforma": "PS5",
    "genero": "Deportes",
    "precio": 69.99,
    "unidadesDisponibles": 5
  }
]
```

### **7.2. Crear un videojuego**

Petición:

```
POST /api/videojuegos
Content-Type: application/json
```

Cuerpo de la petición:

```
{
  "titulo": "Minecraft",
  "plataforma": "PC",
  "genero": "Aventura",
  "precio": 29.99,
  "unidadesDisponibles": 10
}
```

Respuesta `201 Created`:

```
{
  "id": 3,
  "titulo": "Minecraft",
  "plataforma": "PC",
  "genero": "Aventura",
  "precio": 29.99,
  "unidadesDisponibles": 10
}
```

El servidor genera el identificador y devuelve el recurso creado.

### **7.3. Modificar un videojuego**

Petición:

```
PUT /api/videojuegos/3
Content-Type: application/json
```

Cuerpo:

```
{
  "titulo": "Minecraft",
  "plataforma": "PC",
  "genero": "Aventura",
  "precio": 24.99,
  "unidadesDisponibles": 8
}
```

Respuesta `200 OK`:

```
{
  "id": 3,
  "titulo": "Minecraft",
  "plataforma": "PC",
  "genero": "Aventura",
  "precio": 24.99,
  "unidadesDisponibles": 8
}
```

El precio y el stock se han actualizado. Si el videojuego no existe, el servidor responde con `404 Not Found`.

### **7.4. Eliminar un videojuego**

Petición:

```
DELETE /api/videojuegos/3
```

Respuesta:

```
204 No Content
```

La respuesta no incluye cuerpo. Para evitar problemas de integridad, no se debe permitir eliminar un videojuego que tenga reservas activas; en ese caso, se devolverá `409 Conflict`.

### **7.5. Registrar un cliente**

Petición:

```
POST /api/clientes
Content-Type: application/json
```

Cuerpo:

```
{
  "nombre": "Laura García",
  "email": "laura@example.com",
  "telefono": "600123456"
}
```

Respuesta `201 Created`:

```
{
  "id": 1,
  "nombre": "Laura García",
  "email": "laura@example.com",
  "telefono": "600123456"
}
```

El correo electrónico debe ser válido y no estar registrado previamente.

### **7.6. Crear una reserva**

Petición:

```
POST /api/reservas
Content-Type: application/json
```

Cuerpo:

```
{
  "clienteId": 1,
  "videojuegoId": 3,
  "fechaRecogida": "2026-10-20"
}
```

Respuesta `201 Created`:

```
{
  "id": 1,
  "clienteId": 1,
  "videojuegoId": 3,
  "fechaReserva": "2026-10-16T10:00:00",
  "fechaRecogida": "2026-10-20",
  "estado": "pendiente"
}
```

El servidor comprueba que el cliente y el videojuego existen, que hay unidades disponibles y que la fecha de recogida es válida. Si la reserva se acepta, registra la operación y actualiza la disponibilidad según las reglas de negocio.

### **7.7. Consultar una reserva**

Petición:

```
GET /api/reservas/1
```

Respuesta `200 OK`:

```
{
  "id": 1,
  "clienteId": 1,
  "videojuegoId": 3,
  "fechaReserva": "2026-10-16T10:00:00",
  "fechaRecogida": "2026-10-20",
  "estado": "pendiente"
}
```

### **7.8. Modificar una reserva**

Petición:

```
PUT /api/reservas/1
Content-Type: application/json
```

Cuerpo:

```
{
  "clienteId": 1,
  "videojuegoId": 3,
  "fechaRecogida": "2026-10-22",
  "estado": "confirmada"
}
```

Respuesta `200 OK`:

```
{
  "id": 1,
  "clienteId": 1,
  "videojuegoId": 3,
  "fechaReserva": "2026-10-16T10:00:00",
  "fechaRecogida": "2026-10-22",
  "estado": "confirmada"
}
```

Se valida que el nuevo estado sea uno de los permitidos y que la fecha de recogida sea válida. Si se cambia el videojuego, también debe comprobarse la disponibilidad del nuevo juego.

### **7.9. Cancelar una reserva**

Petición:

```
DELETE /api/reservas/1
```

Respuesta:

```
204 No Content
```

La reserva deja de estar activa y se libera la unidad reservada. Para conservar el historial, la implementación puede marcarla como `cancelada` y responder con `204 No Content`, sin eliminar el registro de la base de datos.

## **8. Códigos de estado HTTP**

La API utilizará los siguientes códigos para indicar el resultado de cada operación.

| Código | Nombre                 | Cuándo se utiliza                                                 |
| ------ | ---------------------- | ----------------------------------------------------------------- |
| `200`  | OK                     | Consulta o modificación realizada correctamente                   |
| `201`  | Created                | Recurso creado correctamente                                      |
| `204`  | No Content             | Eliminación o cancelación realizada sin devolver contenido        |
| `400`  | Bad Request            | Datos incorrectos o petición mal formada                          |
| `404`  | Not Found              | El recurso solicitado no existe                                   |
| `409`  | Conflict               | Conflicto con los datos, como un email duplicado o falta de stock |
| `415`  | Unsupported Media Type | Formato de contenido no admitido                                  |
| `500`  | Internal Server Error  | Error inesperado del servidor                                     |

## **9. Validación de datos**

Antes de guardar o modificar información, el servidor debe comprobar que los datos recibidos son correctos.

| Recurso    | Validaciones                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------ |
| Videojuego | Título, plataforma y género obligatorios; precio mayor o igual que cero; unidades disponibles iguales o mayores que cero |
| Cliente    | Nombre y email obligatorios; formato de email válido; email único                                                        |
| Reserva    | Cliente y videojuego existentes; fecha válida y no pasada; estado permitido; disponibilidad suficiente                   |

También deben aplicarse las siguientes reglas:

- Los identificadores deben ser enteros positivos.
- No se debe confiar en los datos enviados por el cliente.
- No se debe permitir una reserva si no quedan unidades disponibles.
- Los estados permitidos serán `pendiente`, `confirmada` y `cancelada`.
- No se debe modificar una reserva cancelada como si siguiera activa.
- Al cancelar una reserva, la unidad reservada debe volver a estar disponible.
- Las comprobaciones de stock y la creación de una reserva deben ejecutarse de forma consistente para evitar reservar la misma unidad dos veces.

## **10. Formato de los errores**

Todas las respuestas de error utilizarán una estructura JSON uniforme.

Ejemplo: videojuego inexistente.

Petición:

```
GET /api/videojuegos/99
```

Respuesta `404 Not Found`:

```
{
  "error": "VIDEOJUEGO_NO_ENCONTRADO",
  "mensaje": "No existe un videojuego con el ID 99"
}
```

Ejemplo: datos inválidos.

Petición:

```
POST /api/videojuegos
Content-Type: application/json
```

Cuerpo:

```
{
  "titulo": "",
  "plataforma": "PS5",
  "genero": "Accion",
  "precio": -10,
  "unidadesDisponibles": 3
}
```

Respuesta `400 Bad Request`:

```
{
  "error": "DATOS_INVALIDOS",
  "mensaje": "Los datos del videojuego no son válidos",
  "detalles": [
    "El título es obligatorio",
    "El precio no puede ser negativo"
  ]
}
```

Ejemplo: reserva sin disponibilidad.

Respuesta `409 Conflict`:

```
{
  "error": "STOCK_INSUFICIENTE",
  "mensaje": "No hay unidades disponibles para reservar este videojuego"
}
```

Los errores no deben mostrar contraseñas, consultas SQL ni información interna del servidor.

## **11. Reglas de negocio y comportamiento de la API**

Para que las operaciones sean coherentes, se establecen estas reglas:

1. Un cliente debe existir antes de crear una reserva.
2. Un videojuego debe existir y tener unidades disponibles.
3. Al crear una reserva válida, se descuenta una unidad disponible.
4. Al cancelar una reserva activa, se devuelve esa unidad al stock.
5. No se puede eliminar un cliente que tenga reservas activas.
6. No se puede eliminar un videojuego con reservas activas.
7. Una reserva confirmada puede seguir siendo cancelable si todavía no se ha completado la recogida.
8. El precio debe almacenarse con un tipo decimal adecuado para importes monetarios.

Para una aplicación real, las operaciones que modifican simultáneamente reservas y stock deben realizarse dentro de una transacción de base de datos.

## **12. Organización sencilla del proyecto**

Una posible organización del código sería:

```
tienda-videojuegos-api/
├── controllers/
│   ├── videojuegoController
│   ├── clienteController
│   └── reservaController
├── models/
│   ├── Videojuego
│   ├── Cliente
│   └── Reserva
├── routes/
│   ├── videojuegoRoutes
│   ├── clienteRoutes
│   └── reservaRoutes
├── app
└── README.md
```

- **Routes:** definen las rutas y los métodos HTTP.
- **Controllers:** procesan las peticiones, validan los datos y devuelven las respuestas.
- **Models:** representan los datos y su relación con la base de datos.
- **App:** configura la aplicación y pone en funcionamiento la API.
- **README:** documenta las rutas, ejemplos y requisitos de ejecución.

Esta estructura es orientativa y se puede adaptar al lenguaje o framework que se utilice en clase.

## **13. Resumen de la propuesta**

La API REST propuesta permite gestionar los tres recursos esenciales de una tienda de videojuegos: videojuegos, clientes y reservas. Utiliza rutas basadas en recursos, los métodos HTTP adecuados, respuestas JSON y códigos de estado estándar.

El diseño se mantiene deliberadamente sencillo: no requiere microservicios, autenticación avanzada ni herramientas de documentación adicionales para comprender sus fundamentos. Su implementación puede realizarse con el lenguaje y framework que se estén estudiando en 2.º DAW.

Como ampliación opcional, se podrían añadir paginación al catálogo, autenticación de clientes o documentación interactiva con Swagger.

También puedo crear una imagen del diagrama de relaciones entre clientes, videojuegos y reservas para incluirla en la documentación del proyecto.
