# P01

## Prompt débil

Hazme una página web de reservas

## Prompt fuerte

Actúa como desarrollador full-stack senior especializado en aplicaciones web de gestión y reservas. Diseña una aplicación web para consultar, gestionar y reservar instalaciones deportivas, adecuada para un proyecto académico de 2.º DAW. Debe cumplir los siguientes requisitos esenciales:

- Utilizar exclusivamente HTML5, CSS3, JavaScript, PHP y MySQL, sin frameworks ni librerías externas.
- Administración:
  - Gestionar instalaciones definiendo fechas y horarios disponibles.
  - Gestionar reservas.
- Usuarios:
  - Consultar instalaciones y disponibilidad.
  - Registrarse e iniciar sesión.
  - Solo usuarios autenticados y con cuenta verificada pueden reservar.
- Registro con:
  - Nombre, apellidos, email, contraseña y confirmación.
  - Validación cliente y servidor.
  - Verificación mediante correo electrónico.
- Inicio de sesión con 2FA mediante código de 6 dígitos.
- Reservas:
  - Mínimo 24 horas de antelación.
  - No permitir horarios ocupados o no disponibles.
  - Impedir reservas sin autenticación.
- Seguridad:
  - Hash de contraseñas.
  - Consultas preparadas.
  - Validación de servidor.
  - Sesiones seguras y control de permisos.
  - Protección de verificación de correo y 2FA.
- Diseñar una base de datos MySQL con usuarios, instalaciones, disponibilidad, horarios, reservas, verificación y 2FA.
- Interfaz responsive, clara e intuitiva.

# P02

## Prompt débil

Revisa este código JavaScript

## Prompt fuerte

Actúa como revisor senior de JavaScript especializado en desarrollo web y revisión académica de código de 2.º DAW. Analiza el código proporcionado, detecta errores y propon correcciones manteniendo su estructura original siempre que sea posible. Requisitos esenciales:

- Revisar:
  - Legibilidad y organización.
  - Nombres de variables y funciones incluyendo el uso de `fetch()`.
  - Comentarios.
  - Código repetido o innecesariamente complejo.
  - `response.ok`, códigos HTTP y conversión de respuestas, como `response.json()`.
  - Errores de red y diferencia con errores HTTP.
  - `try...catch` / `.catch()`.
  - Mensajes mostrados al usuario.
- Si el código no realiza peticiones HTTP, indicarlo y no añadir `fetch()` artificialmente.
- Mantener la funcionalidad original y no añadir funcionalidades innecesarias.
- Adaptar las soluciones al nivel de 2.º DAW.
- Diferenciar errores reales de simples mejoras de estilo.

Código para revisar:

```javascript
// Ejemplo implementando el metodo POST:
async function postData(url = "", data = {}) {
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
```

# P03

## Prompt débil

Explícame PHP

## Prompt fuerte

Actúa como desarrollador backend senior y docente de 2.º DAW. Explica de forma técnica pero didáctica la validación de formularios en PHP utilizando como caso práctico una reserva de videojuegos de una tienda. Requisitos esenciales:

- Explicar:
  - Papel de PHP en la validación.
  - Diferencia entre validación cliente y servidor.
  - Por qué el servidor nunca debe confiar en los datos recibidos.
- Crear un formulario con nombre, email, videojuego, cantidad y fecha de reserva.
- Definir y aplicar reglas de validación para cada campo.
- Utilizar HTML + PHP, POST y ninguna dependencia externa.
- Mostrar un caso válido, un caso incorrecto con varios errores, como PHP detecta cada error y los mensajes mostrados al usuario.
- Explicar las principales herramientas utilizadas:
  - `$_POST`
  - `$_SERVER["REQUEST_METHOD"]`
  - `isset()`
  - `trim()`
  - `filter_var()`
  - `in_array()`
  - `empty()`
  - arrays de errores
  - `htmlspecialchars()`
- Incluir buenas prácticas de validación y seguridad.

# P04

## Prompt débil

Haz una base de datos para una tienda

## Prompt fuerte

Actúa como desarrollador especializado en bases de datos relacionales. Diseña una base de datos MySQL para una tienda de videojuegos, partiendo de un caso de negocio ficticio y preparada para ser utilizada posteriormente por una aplicación web. Requisitos esenciales:

- Modelar como mínimo las siguientes entidades: Clientes, videojuegos, plataformas, pedidos y líneas de pedido. Añade otras entidades solo si son necesarias y están justificadas.
- Para cada entidad definir sus atributos, los tipos de datos, las claves primarias y foráneas y las relaciones y cardinalidades con otras entidades, además de las restricciones si fueran necesarias.
- Explicar las relaciones y su implementación.
- Justificar la normalización hasta 3FN.
- Evitar redundancias y anomalías de inserción, modificación y eliminación.
- Generar un script MySQL 8.x ejecutable desde cero con tablas, PK/FK, NOT NULL, UNIQUE, DEFAULT, CHECK si procede, ON DELETE y ON UPDATE justificados.
- Añadir datos ficticios de prueba.
- Incluir consultas para comprobar el catálogo, productos por plataforma, pedidos de un cliente, contenido de un pedido, total de un pedido y productos más vendidos.

# P05

## Prompt débil

Crea una API

## Prompt fuerte

Actúa como desarrollador back-end senior especializado en diseño y documentación de APIs REST. Diseña una API REST sencilla para proporcionar acceso a los recursos de una aplicación de reservas de videojuegos de una tienda. Requisitos esenciales:

- Identificar los principales recursos de la API.
- Definir las rutas y operaciones HTTP necesarias.
- Utilizar correctamente GET, POST, PUT, y DELETE.
- Definir los parámetros y datos de entrada.
- Especificar las respuestas JSON.
- Definir códigos de estado HTTP apropiados.
- Explicar las relaciones entre los recursos.
- Contemplar validación de datos y errores.
- Mantener un diseño RESTful sencillo y apropiado para 2.º DAW.
- Documentar ejemplos de peticiones y respuestas.
- No introducir complejidad o tecnologías innecesarias.

# P06

## Prompt débil

Hazme un diseño bonito para una web.

## Prompt fuerte

Actúa como desarrollador full-stack senior especializado en desarrollo web, UX/UI, accesibilidad y sistemas de reservas. Diseña una aplicación web moderna y responsive para consultar, gestionar y reservar instalaciones deportivas, adaptada a un proyecto académico de 2.º DAW.

**Público objetivo:**

- Principalmente adolescentes desde 16 años que quieran practicar deporte con amigos de forma autónoma. De forma secundaria adultos que utilicen las instalaciones como ocio. El diseño debe ser atractivo para ambos perfiles sin centrarse exclusivamente en uno.

**Requisitos funcionales:**

- Administración de instalaciones deportivas con su configuración de fechas y horarios disponibles.
- Consulta pública de instalaciones y gestión de reservas.
- Registro e inicio de sesión.
- Verificación de correo y autenticación mediante 2FA.
- Área personal y consulta de reservas.
- Reservas únicamente para usuarios autenticados y verificados con antelación mínima de 24 horas. No permitir reservas duplicadas ni horarios no disponibles.

**Requisitos de presentación:**

- Página principal clara y visual.
- Header con logotipo y navegación.
- Usuarios no autenticados: iniciar sesión y registrarse.
- Usuarios autenticados: área personal, mis reservas y cerrar sesión.
- Instalaciones mostradas mediante tarjetas. Cada tarjeta debe incluir imagen, nombre, tipo, descripción, características, ubicación, disponibilidad y acceso al detalle.

**Accesibilidad:**

- Diseño con HTML5 semántico incluyendo navegación completa con foco visible, CSS3, JavaScript, PHP y MySQL, sin frameworks ni librerías externas para la implementación principal.
- Contraste suficiente con tipografía y tamaños legibles.
- Formularios accesibles con mensajes de error comprensibles y asociados a los campos.

**Seguridad:**

- Contraseñas mediante hash seguro.
- Consultas preparadas.
- Validación en servidor.
- Sesiones seguras y control de roles y permisos.
- Protección de autenticación, verificación de correo, 2FA y control de intentos de autenticación.
- Protección frente a manipulación de parámetros.

**Base de datos:** Diseñar un modelo MySQL que contemple como mínimo:

- Usuarios con roles (administrador y usuario).
- Instalaciones con su disponibilidad, horarios y reservas.
- Verificación de cuentas.

**UX/UI y responsive:**

- Interfaz moderna, coherente e intuitiva.
- Diseño responsive para móvil, tablet y escritorio.
- Definir previamente un sistema visual básico.

**Resultado esperado:**

1. Explicar brevemente la propuesta UX/UI.
2. Definir arquitectura, estructura de archivos y modelo de datos.
3. Explicar los principales flujos.
4. Proporcionar el prototipo funcional.
5. Realizar una comprobación final de funcionalidad, responsive, accesibilidad y seguridad.

# P07

## Prompt débil

Encuentra errores en este código

## Prompt fuerte

Actúa como revisor senior de JavaScript y docente de 2.º DAW. Analiza el siguiente código JavaScript procedente del caso práctico 2 y realiza una revisión orientada a detectar, reproducir y corregir errores. Requisitos esenciales:

- Identifica los errores o comportamientos incorrectos del código.
- Reproduce al menos un fallo, indicando claramente qué acción o entrada lo provoca y cuál es el resultado obtenido.
- Prioriza los problemas según su gravedad e impacto.
- Explica brevemente la causa de cada error detectado.
- Propón una corrección manteniendo la estructura original siempre que sea posible, mostrando posteriormente el código corregido.
- Realiza una nueva prueba después de la corrección y demuestra que el fallo ha quedado solucionado.
- Diferencia claramente entre problema detectado → reproducción → corrección → prueba final.

No introduzcas mejoras innecesarias que no estén relacionadas con los errores encontrados.

Código a revisar:

```javascript
// Ejemplo implementando el metodo POST:
async function postData(url = "", data = {}) {
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
```

# P08

## Prompt débil

Haz la documentación de mi proyecto

## Prompt fuerte

Actúa como desarrollador senior y responsable de documentación técnica. Genera y revisa el `README.md` de mi proyecto a partir de la información, código y archivos que te proporcione. El README debe documentar de forma clara y concisa:

- Descripción y objetivo del proyecto.
- Requisitos necesarios.
- Instalación y ejecución paso a paso.
- Estructura principal del proyecto.
- Funcionamiento de las funcionalidades principales.
- Pruebas realizadas.
- Limitaciones conocidas y funcionalidades pendientes.
- Fuentes y referencias utilizadas.
- Información sobre el banco de prompts y sus ejemplos.

**Requisitos de revisión:**

- Comprueba que la documentación coincida con el estado real del proyecto.
- No inventes funcionalidades, pruebas, requisitos ni fuentes.
- Detecta información incompleta, desactualizada o contradictoria.
- Propón y aplica las correcciones necesarias manteniendo una estructura clara y profesional.
- Incluye comandos o fragmentos de código únicamente cuando sean necesarios para ejecutar o comprender el proyecto.

Además, define un historial Git coherente, con commits descriptivos que permitan seguir la evolución de la documentación y del banco de prompts.

**Resultado esperado:** un `README.md` completo y listo para incluir en el repositorio.
