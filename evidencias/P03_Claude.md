# Respuesta prompt débil

PHP (_PHP: Hypertext Preprocessor_) es un lenguaje de programación pensado sobre todo para **desarrollo web del lado del servidor**. Es decir, el código se ejecuta en el servidor, genera HTML (u otros datos como JSON) y eso es lo que recibe el navegador. El usuario nunca ve el código PHP.

## Para qué se usa

- Sitios web dinámicos (con contenido que cambia según el usuario, la base de datos, etc.)
- APIs y backends
- Gestores de contenido: **WordPress**, Drupal, Joomla y tiendas como WooCommerce o PrestaShop están hechos en PHP
- Aplicaciones con frameworks como **Laravel** o **Symfony**

## Cómo funciona

1. El navegador pide una página (`index.php`).
2. El servidor (Apache, Nginx...) pasa el archivo al intérprete de PHP.
3. PHP ejecuta el código, consulta la base de datos si hace falta y genera el HTML.
4. El servidor envía ese HTML al navegador.

## Ejemplo básico

```php
<?php
$nombre = "Ana";
$edad = 28;

echo "Hola, $nombre. Tienes $edad años.";

if ($edad >= 18) {
    echo " Eres mayor de edad.";
}

$frutas = ["manzana", "pera", "uva"];
foreach ($frutas as $fruta) {
    echo "<li>$fruta</li>";
}
```

## Características clave

- **Variables** con `$` delante (`$nombre`). No hace falta declarar el tipo, aunque desde PHP 7/8 se pueden usar tipos opcionales.
- **Se mezcla con HTML**: puedes insertar bloques `<?php ... ?>` dentro de una página.
- **Arrays** muy flexibles (sirven como listas y como diccionarios).
- **Orientado a objetos**: clases, interfaces, traits, herencia.
- **Conexión a bases de datos**: normalmente MySQL/MariaDB o PostgreSQL mediante PDO.
- **Sesiones y formularios**: manejo sencillo con `$_GET`, `$_POST`, `$_SESSION`.

## Puntos fuertes y débiles

**Ventajas:** muy extendido, hosting barato y disponible en todas partes, curva de aprendizaje suave, enorme comunidad y documentación, y el PHP moderno (8.x) es rápido y bastante robusto.

**Desventajas:** su historia ha dejado inconsistencias en los nombres de funciones, y el código antiguo o mal escrito puede ser desordenado e inseguro (inyección SQL, XSS) si no se siguen buenas prácticas.

## Cómo empezar

1. Instala un entorno local como **XAMPP**, **Laragon** o usa Docker.
2. Crea un archivo `hola.php` en la carpeta del servidor.
3. Ábrelo desde `http://localhost/hola.php`.
4. Aprende después: formularios, PDO con base de datos, y finalmente un framework como Laravel.

Si quieres, dime tu nivel (¿ya programas en otro lenguaje?) y qué quieres hacer con PHP, y te preparo una ruta de aprendizaje o ejercicios concretos.

# Respuesta prompt fuerte

Voy a crear el formulario completo en un único archivo `reserva.php` (HTML + PHP, sin dependencias) y luego te explico la teoría y los casos de prueba.

# Validación de formularios en PHP: reserva de videojuegos

Te he enviado `reserva.php`, un único archivo con HTML + PHP, método POST y sin dependencias. Para probarlo no necesitas XAMPP: basta con ejecutar `php -S localhost:8000` en la carpeta del archivo y abrir `http://localhost:8000/reserva.php`.

## 1. Papel de PHP en la validación

PHP se ejecuta en el servidor y es la **última barrera** antes de que los datos lleguen a tu lógica de negocio, tu base de datos o tu correo. Su trabajo es:

1. **Recibir** los datos (`$_POST`).
2. **Normalizarlos** (quitar espacios, comprobar tipos).
3. **Validarlos** contra reglas de negocio (formato, rango, lista de valores permitidos).
4. **Decidir**: si hay errores, devolver el formulario con mensajes y los datos ya escritos; si no, procesar la reserva.
5. **Escapar** todo lo que vuelva a imprimirse en HTML.

## 2. Validación en cliente vs. en servidor

|                                 | Cliente (HTML5/JavaScript)              | Servidor (PHP)                                  |
| ------------------------------- | --------------------------------------- | ----------------------------------------------- |
| **Objetivo**                    | Comodidad: feedback inmediato           | Seguridad e integridad de datos                 |
| **Dónde corre**                 | En el navegador del usuario             | En tu servidor                                  |
| **¿Se puede saltar?**           | Sí, trivialmente                        | No (es tu código)                               |
| **Ejemplos**                    | `required`, `type="email"`, `min`/`max` | `filter_var()`, `in_array()`, reglas de negocio |
| **¿Es suficiente por sí sola?** | **Nunca**                               | Sí, es la obligatoria                           |

Las dos son complementarias: la del cliente mejora la experiencia de usuario y la del servidor protege el sistema. En el formulario puse `novalidate` para desactivar la del navegador y poder ver la del servidor en acción.

## 3. Por qué el servidor nunca debe confiar en los datos recibidos

Todo lo que llega por HTTP está **bajo control del emisor**. No hace falta ser hacker: con las herramientas de desarrollo del navegador, `curl` o Postman se puede enviar cualquier cosa, saltándose tu formulario y tu JavaScript:

```bash
curl -X POST http://localhost:8000/reserva.php \
  -d "nombre=<script>alert(1)</script>&email=x&videojuego=gratis&cantidad=-5&fecha=ayer"
```

Si el servidor asumiera que "el `<select>` solo permite valores del catálogo" o que "el campo numérico solo admite números", esa petición provocaría datos corruptos, XSS o inyección SQL. **Regla de oro: tratar toda entrada como hostil hasta demostrar lo contrario.**

## 4. Reglas de validación por campo

| Campo          | Reglas                                                                      | Herramienta principal                            |
| -------------- | --------------------------------------------------------------------------- | ------------------------------------------------ |
| **nombre**     | Obligatorio, 2-50 caracteres, solo letras (con tildes), espacios, `'` y `-` | `trim`, `mb_strlen`, `preg_match`                |
| **email**      | Obligatorio, formato válido, máx. 254 caracteres                            | `filter_var(..., FILTER_VALIDATE_EMAIL)`         |
| **videojuego** | Obligatorio, debe existir en el catálogo                                    | `in_array(..., true)`                            |
| **cantidad**   | Obligatoria, entero entre 1 y 5                                             | `filter_var(..., FILTER_VALIDATE_INT)` con rango |
| **fecha**      | Obligatoria, fecha real `AAAA-MM-DD`, desde hoy hasta +30 días              | `DateTimeImmutable::createFromFormat`            |

## 5. Flujo del código

```php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 1. Recoger y limpiar
    // 2. Validar campo a campo → $errores['campo'] = 'mensaje'
    // 3. if (empty($errores)) → reserva aceptada
}
// 4. Pintar: confirmación o formulario con errores y valores previos
```

La idea central es el **array `$errores`**: empieza vacío y cada regla que falla añade una entrada `campo => mensaje`. Al final, `empty($errores)` responde a la pregunta "¿es válido todo?".

## 6. Casos de prueba

### Caso válido

| Campo      | Valor enviado       |
| ---------- | ------------------- |
| nombre     | `Lucía Fernández`   |
| email      | `lucia@example.com` |
| videojuego | `zelda-totk`        |
| cantidad   | `2`                 |
| fecha      | `2026-10-20`        |

**Qué hace PHP:** todas las reglas se cumplen, `$errores` queda vacío, `empty($errores)` es `true` y se muestra:

> **¡Reserva registrada!** Nombre: Lucía Fernández · Email: lucia@example.com · Videojuego: The Legend of Zelda: Tears of the Kingdom · Cantidad: 2 · Fecha: 2026-10-20

### Caso incorrecto (5 errores a la vez)

| Campo      | Valor enviado                                     | Cómo lo detecta PHP                                             | Mensaje mostrado                                                        |
| ---------- | ------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------- |
| nombre     | `R2-D2`                                           | Pasa `trim` y longitud, pero `preg_match` falla por los dígitos | _El nombre solo puede contener letras, espacios, apóstrofos y guiones._ |
| email      | `ana@@correo`                                     | `filter_var(..., FILTER_VALIDATE_EMAIL)` devuelve `false`       | _El email no tiene un formato válido (ejemplo: nombre@dominio.es)._     |
| videojuego | `juego-pirata` (manipulado con DevTools o `curl`) | `in_array('juego-pirata', [...ids], true)` devuelve `false`     | _El videojuego seleccionado no existe en el catálogo._                  |
| cantidad   | `9`                                               | `filter_var` con `max_range => 5` devuelve `false`              | _La cantidad debe ser un número entero entre 1 y 5._                    |
| fecha      | `2026-10-01`                                      | La fecha es válida, pero `$fecha < $hoy`                        | _La fecha no puede ser anterior a hoy._                                 |

El usuario ve un recuadro resumen ("Revisa el formulario (5 error/es)"), cada mensaje bajo su campo con el borde en rojo, y **los valores que escribió siguen en el formulario** (ya escapados), para que corrija sin reescribir todo.

Variantes interesantes para probar: fecha `2026-02-30` (no existe; `format()` de vuelta no coincide), cantidad `0` o `abc`, nombre `"   "` (solo espacios: tras `trim` queda vacío).

## 7. Herramientas utilizadas

**`$_POST`**: array superglobal con los datos enviados por el formulario (`name` → valor). Siempre son **texto** (o arrays si alguien manipula la petición, como `nombre[]=x`).

**`$_SERVER["REQUEST_METHOD"]`**: indica el método HTTP de la petición. Con `=== 'POST'` distinguimos "el usuario acaba de abrir la página" (GET: mostrar formulario vacío) de "ha enviado el formulario" (POST: validar).

**`isset()`**: comprueba que una variable o clave existe y no es `null`. Evita avisos por claves inexistentes si falta un campo:

```php
isset($_POST[$campo]) && is_string($_POST[$campo])
```

Añadimos `is_string()` porque `isset` también es `true` para arrays, y `trim()` sobre un array daría error.

**`trim()`**: elimina espacios y saltos de línea al inicio y final. Sin ella, `"   "` pasaría como nombre "rellenado" y `"ana@correo.es "` fallaría la validación del email sin motivo.

**`filter_var()`**: valida (y/o sanea) según filtros predefinidos. Dos usos aquí:

```php
filter_var($email, FILTER_VALIDATE_EMAIL);
filter_var($cantidad, FILTER_VALIDATE_INT, ['options' => ['min_range' => 1, 'max_range' => 5]]);
```

Devuelve el valor validado o `false`. Trampa clásica: `filter_var("0", FILTER_VALIDATE_INT)` devuelve `0`, que es "falsy". Por eso se compara con `=== false` y no con `!$resultado`.

**`in_array()`**: comprueba si un valor está en una lista. Es la **lista blanca** del videojuego: solo se aceptan ids del catálogo. El tercer parámetro `true` activa la comparación estricta (tipo y valor), evitando coincidencias raras por conversión de tipos.

**`empty()`**: `true` si la variable no existe o vale `""`, `0`, `"0"`, `null`, `false` o `[]`. Es ideal para `empty($errores)`. **No** la uses para comprobar campos de texto "obligatorios": `empty("0")` es `true`, y un valor legítimo como `"0"` se trataría como vacío. Por eso para los campos comparamos con `=== ''`.

**Arrays de errores**: `$errores['email'] = '...'` asocia cada mensaje a su campo. Permite (a) saber si hay errores (`empty`), (b) pintar cada mensaje junto a su campo (`isset($errores['email'])`) y (c) listar el resumen (`foreach` / `count`).

**`htmlspecialchars()`**: convierte `< > & " '` en entidades HTML para que el navegador los muestre como texto y no los ejecute como código. En el proyecto está encapsulada en `e()`:

```php
htmlspecialchars($valor, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
```

Sin ella, un nombre como `<script>alert(1)</script>` se ejecutaría al reenviarse al formulario (**XSS**). Se escapa **en la salida**, no al validar.

## 8. Buenas prácticas de validación y seguridad

**Validación**

- **Valida siempre en servidor**; la del cliente es un extra de usabilidad.
- **Lista blanca antes que lista negra**: define qué es válido (catálogo, rangos, formatos) en lugar de intentar bloquear lo malo.
- **Normaliza antes de validar** (`trim`) y **valida tipo, formato, rango y longitud**.
- **Un mensaje claro por campo**, que diga qué corregir, sin revelar detalles internos.
- **Conserva lo que el usuario escribió** al devolver el formulario (excepto contraseñas).
- **Centraliza reglas repetidas** en funciones cuando el proyecto crezca.
- Prefiere `mb_strlen` a `strlen` para contar caracteres con tildes o `ñ`.

**Seguridad**

- **Escapa en la salida** con `htmlspecialchars` (XSS). Nunca imprimas `$_POST` directamente.
- **Consultas preparadas con PDO** al guardar en BD; **jamás** concatenes variables en SQL (inyección SQL). Validar no sustituye a las consultas preparadas: son capas distintas.
- **No uses `$_SERVER['PHP_SELF']` en `action`**: es manipulable (XSS). Usa `action=""`.
- **Token CSRF** en formularios que modifican datos: genera uno aleatorio en sesión (`bin2hex(random_bytes(32))`), inclúyelo como campo oculto y compáralo con `hash_equals()` al recibir el POST.
- **Patrón Post/Redirect/Get**: tras procesar con éxito, redirige con `header('Location: ...')` para que al recargar no se reenvíe la reserva.
- **Revalida la lógica de negocio en servidor** (stock, precio, duplicados) aunque el formulario "no permita" ciertas opciones.
- **No muestres errores técnicos al usuario** en producción (`display_errors=Off`, registra en logs).

## Para practicar

1. Añade un campo "teléfono" con validación por expresión regular.
2. Impide reservar fines de semana usando `$fecha->format('N') >= 6`.
3. Implementa el token CSRF con `session_start()`.
4. Guarda la reserva con PDO y consultas preparadas, aplicando Post/Redirect/Get.
