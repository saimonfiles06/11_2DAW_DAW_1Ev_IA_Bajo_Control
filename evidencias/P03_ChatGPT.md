# Respuesta prompt débil

# **¿Qué es PHP? 🖥️**

**PHP es un lenguaje de programación que se utiliza principalmente para crear páginas web dinámicas.** Permite que una web haga cosas más allá de mostrar texto e imágenes: iniciar sesión, guardar datos, procesar formularios o gestionar una tienda online.

Por ejemplo, cuando entras en una web, escribes tu usuario y contraseña y pulsas «Iniciar sesión», PHP puede comprobar tus datos en una base de datos y decidir si puedes acceder.

[File:Webysther 20160423 - Elephpant.svg - Wikimedia Commons](https://images.openai.com/static-rsc-4/w7bMorP67JMWhHScD1y_bH5BzEuTzPS2kvUK92XIrmmLErDQBix3Vl2XKIvGWsWGFsADPV3GLFCh9wwCQih6e11ieyZFTyZXHjkAMCf57cJvELO4xrGr7ifeIFw8Ur9mwKGp-ibf684Zw_SPRi1UUl12WqPkSO696RWUzu0Zse8?purpose=inline)

**PHP**

Procesa la lógica de la aplicación en el servidor.

[Online Course: Build Interactive Websites with HTML, CSS & jQuery from EDUCBA | Class Central](https://images.openai.com/static-rsc-4/8PyEI9LJ4cjLlLTP9-i5z9FvDg7m5KuC3daWaipL2KGN7Dx439aZhjyw1qcVfVCZL2D3CdwjLfU_IfntMFqk_xTW5rhDqoq6GKXDm8b5bO5fzc60HDbUHTea73axZanvtrnS5Kg0bIN7WF97P_TzYj391KDbfFwW9DI2qEd1OU4?purpose=inline)

**La página web**

Muestra al usuario el resultado mediante HTML y CSS.

## **1. ¿Cómo funciona PHP?**

Imagina que visitas una web para consultar tus notas de clase.

**1. El navegador**

Solicitas ver tus notas.

**2. El servidor ejecuta PHP**

Busca tus notas y prepara la respuesta.

**3. La base de datos**

Guarda las notas y las devuelve cuando se solicitan.

**4. Recibes el resultado**

Tu navegador muestra las notas en pantalla.

PHP trabaja principalmente en el servidor. El navegador normalmente recibe el HTML generado, no el código PHP original.

## **2. Tu primer programa en PHP**

Mira este ejemplo:

```

<?php
echo "¡Hola, mundo!";
?>

```

¿Qué significa cada parte?

- `<?php` indica el comienzo del código PHP.
- `echo` muestra un texto o un valor en la salida.
- `"¡Hola, mundo!"` es el texto que queremos mostrar.
- `;` indica el final de esa instrucción.
- `?>` puede cerrar el bloque PHP, aunque en archivos que contienen solo PHP suele omitirse.

El resultado sería:

¡Hola, mundo!

## **3. Las variables en PHP**

Una variable sirve para guardar información, como un nombre, una edad o un precio.

```

<?php
$nombre = "Lucía";
$edad = 20;

echo $nombre;
echo $edad;
?>

```

En este código:

- `$nombre` guarda el texto `"Lucía"`.
- `$edad` guarda el número `20`.
- Las variables en PHP empiezan con el símbolo `$`.
- El signo `=` asigna un valor a una variable.

Puedes combinar variables y texto:

```

<?php
$nombre = "Lucía";
echo "Hola, " . $nombre;
?>

```

Resultado: `Hola, Lucía`

El operador `.` sirve para concatenar, es decir, unir textos.

## **4. Las condiciones: tomar decisiones**

PHP puede ejecutar instrucciones diferentes según una condición.

```

<?php
$edad = 20;

if ($edad >= 18) {
    echo "Eres mayor de edad";
} else {
    echo "Eres menor de edad";
}
?>

```

Esto significa:

- `if`: si se cumple una condición.
- `$edad >= 18`: comprueba si la edad es igual o superior a 18.
- `else`: ejecuta otra opción si la condición no se cumple.

Como la edad es 20, el resultado será `Eres mayor de edad`.

## **5. Los bucles: repetir instrucciones**

Si quieres mostrar los números del 1 al 5, no necesitas escribir cinco instrucciones diferentes.

```

<?php
for ($i = 1; $i <= 5; $i++) {
    echo $i . "<br>";
}
?>

```

Resultado en una página web:

1

2

3

4

5

El bucle `for` repite el código mientras se cumple la condición. En este caso, `$i++` aumenta el contador en uno en cada repetición.

`<br>` es una etiqueta HTML que introduce un salto de línea.

## **6. ¿Para qué se utiliza PHP?**

[The WordPress Dashboard - Cadent](https://images.openai.com/static-rsc-4/F8OSC7NXpas7En_l0boii80IUuu0-gGO5ez2pSvO-h9lH_HyAD_oxmo8ZMKIpJJVLyvyzCjQZbJbvgOVoAIyqZWL4faAsAKn7_vIXP_QydwqcsJis9F62JxUYYXrCmP89LLYFA68Ott-Sm9E5sr5UIJEwbKGakaspSddNBB9hHQ?purpose=inline)

**Crear páginas web**\
PHP se utiliza en sistemas como WordPress para gestionar contenido y páginas.

[مصرف الراجحي الأردن | حلول مصرفية متوافقة مع الشريعة الإسلامية - مصرف الراجحي](https://images.openai.com/static-rsc-4/jw3xdJYcQb9vfLZ-0Muhhxn6UIa3dAgtoQZ83iw0loaOulfqgDWtJZSMwUdNqNvKBfG6qMLsx4nrylbTcCLvSty5hvZ_QcvEjyGvGd-BD4RKPzvYM8eHQZU9GnvHDwo7KU1vxEF83KfAJZcVDzW2AP6WDg_g_1p9Wd9IK32jumk?purpose=inline)

**Tiendas online**\
Gestiona productos, pedidos, usuarios y procesos de compra.

[Veritabanı Tasarımı Nedir? Sağlam Veri Modelleme Temelleri](https://images.openai.com/static-rsc-4/DlQx-2Rq0CcpuoH9UMgcB-5RzT2HmKOk1lSmCazJbVMcL6TTZRWZe835YZAhI82rqqH5fvs6qsCeCGsk_0UNURX1CEA1ZuruYlBijuZ5L67Ff8svYrAKPO5q906zCVUMCP7vCVXcr2PlMGAjYBmn5HOe20-ep1Zn67Ve1K-mlsU?purpose=inline)

**Bases de datos**\
Puede consultar, guardar, actualizar y eliminar información usando sistemas como MySQL.

[Sign in to account, user authorization, login authentication page concept. Laptop with login and password form page on screen. Vector stock illustration.](https://images.openai.com/static-rsc-4/s-rc_TVJySs2zWgjNWdPbcf6yCM_xTmhDA5OLuHH7p5H2I6fxEkLRL3D8S-TJMIAlxauwgD7DIXtNenpWgmmaBZI-17hnfwknNZ7MFonOGsvUiRD-zDpQMFYR2xyL-KJRvaDszTBBkJow4ieETMYl0mqnryT7olSBnBiVL4TfqerlY6vp_ABd5O-15oZSuQn?purpose=inline)

**Aplicaciones web**\
Permite crear registros de usuarios, inicios de sesión, paneles privados y sistemas de reservas.

## **7. PHP frente a HTML, CSS y JavaScript**

| Tecnología | ¿Para qué sirve?                                                       |
| ---------- | ---------------------------------------------------------------------- |
| HTML       | Estructura y contenido de la página.                                   |
| CSS        | Colores, diseño y apariencia.                                          |
| JavaScript | Interacciones en el navegador y otras tareas.                          |
| PHP        | Lógica en el servidor, procesamiento de datos y generación de páginas. |
| SQL        | Consultar y gestionar datos en bases de datos relacionales.            |

Estas tecnologías pueden trabajar juntas para construir una web completa.

## **8. Practica lo que has aprendido**

**Pregunta:** ¿Qué mostrará este código PHP?

```

<?php
$precio = 10;
$precio = $precio + 5;
echo $precio;
?>

```

10

15

105

5

Comprobar respuesta

## **¿Cómo puedes empezar a aprender PHP?**

Te recomiendo este orden:

1. Variables y tipos de datos.
2. Operadores matemáticos y de comparación.
3. Condiciones (`if`, `else`).
4. Bucles (`for`, `while`).
5. Funciones.
6. Arrays.
7. Formularios HTML y PHP.
8. Bases de datos con SQL.
9. Seguridad y creación de aplicaciones web.

No necesitas instalar nada para empezar a entender la teoría; para ejecutar programas PHP en tu ordenador, puedes instalar PHP o utilizar un entorno local como XAMPP.

## **Adaptemos el aprendizaje a ti**

Para explicártelo de una forma que te resulte útil, dime qué necesitas aprender.

¿Cuál es tu nivel actual?

No sé programar todavía.

Conozco algo de HTML o programación.

Ya programo y quiero aprender PHP.

¿Para qué quieres aprender PHP?

Crear páginas web desde cero.

Estudiar para un examen o curso.

Prepararme para trabajar como desarrollador.

Aprender a modificar WordPress.

¿Cómo prefieres aprender?

Con ejercicios y ejemplos prácticos.

Con explicaciones paso a paso.

Creando un proyecto real.

Empezar a aprender PHP

# Respuesta prompt fuerte

# **Validación de formularios en PHP: reserva de videojuegos**

2.º DAW · Backend · PHP nativo · HTML · Método POST

La validación de formularios es una de las tareas fundamentales del desarrollo backend. No consiste únicamente en comprobar si un campo está vacío: también implica verificar tipos de datos, formatos, rangos permitidos y reglas de negocio, además de gestionar los errores de forma segura.

Vamos a desarrollar un caso práctico realista: una tienda online permite reservar videojuegos mediante un formulario. El servidor PHP recibirá los datos, los validará y, si son correctos, mostrará una confirmación. Si encuentra errores, volverá a mostrar el formulario con mensajes específicos para cada campo.

## **1. ¿Qué papel desempeña PHP en la validación?**

PHP es un lenguaje que se ejecuta en el servidor. Cuando un usuario envía un formulario, el navegador transmite los datos y PHP puede analizarlos antes de realizar cualquier operación.

**1. Formulario HTML**

El usuario introduce sus datos.

**2. Petición HTTP POST**

El navegador envía los datos al servidor.

**3. Validación en PHP**

Comprueba campos, formatos y reglas de negocio.

**Datos válidos**

Confirmar la reserva.

**Datos incorrectos**

Mostrar errores.

**Idea fundamental:** el navegador facilita la introducción de datos, pero el servidor decide si son aceptables.

### **Validación en cliente frente a validación en servidor**

| Característica                    | Cliente (HTML/JavaScript) | Servidor (PHP)                             |
| --------------------------------- | ------------------------- | ------------------------------------------ |
| Dónde se ejecuta                  | Navegador                 | Servidor web                               |
| Cuándo valida                     | Antes o durante el envío  | Al recibir la petición                     |
| Rapidez                           | Inmediata                 | Requiere comunicación con el servidor      |
| Se puede manipular                | Sí, con facilidad         | Debe aplicar las reglas independientemente |
| Es suficiente para proteger datos | No                        | Es imprescindible                          |

Por ejemplo, `required`, `type="email"` y `min="1"` ayudan a detectar errores en el navegador. Sin embargo, alguien puede desactivar JavaScript, modificar el HTML desde las herramientas de desarrollo o enviar una petición HTTP creada manualmente.

Por eso, **nunca debemos confiar en los datos recibidos**, aunque procedan de nuestro propio formulario. El usuario controla el cliente y puede enviar campos inexistentes, valores alterados, tipos inesperados o cantidades fuera de rango.

## **2. Diseñar el formulario y establecer las reglas**

La tienda permite reservar videojuegos de un catálogo cerrado. Vamos a aplicar estas reglas de negocio:

| Campo            | Reglas de validación                                                          |
| ---------------- | ----------------------------------------------------------------------------- |
| Nombre           | Obligatorio, entre 2 y 60 caracteres; letras, espacios, guiones y apóstrofos. |
| Email            | Obligatorio y con formato de correo válido.                                   |
| Videojuego       | Obligatorio y debe pertenecer al catálogo autorizado.                         |
| Cantidad         | Número entero entre 1 y 5.                                                    |
| Fecha de reserva | Obligatoria, fecha real con formato `AAAA-MM-DD` y no anterior al día actual. |

La última regla es importante: que un dato tenga el formato correcto no significa necesariamente que sea válido para nuestro negocio. Por ejemplo, `2020-02-30` parece una fecha, pero no existe.

## **3. Implementación completa con HTML y PHP**

Guarda el siguiente código en un archivo llamado `reserva.php`. Utiliza PHP nativo, sin frameworks ni librerías externas.

```

<?php
// reserva.php

// 1. Catálogo autorizado por la tienda.
$videojuegos = [
    'zelda' => 'The Legend of Zelda: Tears of the Kingdom',
    'elden_ring' => 'Elden Ring',
    'minecraft' => 'Minecraft',
    'mario' => 'Super Mario Bros. Wonder'
];

// 2. Valores iniciales para el formulario.
$nombre = '';
$email = '';
$videojuego = '';
$cantidad = '';
$fecha = '';

$errores = [];
$reservaValida = false;

// 3. Solo procesamos los datos al recibir un POST.
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Evitamos pasar arrays inesperados a trim().
    // Solo aceptamos campos de texto.
    $nombre = isset($_POST['nombre'])
        && is_string($_POST['nombre'])
        ? trim($_POST['nombre']) : '';

    $email = isset($_POST['email'])
        && is_string($_POST['email'])
        ? trim($_POST['email']) : '';

    $videojuego = isset($_POST['videojuego'])
        && is_string($_POST['videojuego'])
        ? $_POST['videojuego'] : '';

    $cantidad = isset($_POST['cantidad'])
        && is_string($_POST['cantidad'])
        ? trim($_POST['cantidad']) : '';

    $fecha = isset($_POST['fecha'])
        && is_string($_POST['fecha'])
        ? $_POST['fecha'] : '';

    // 4. Validación del nombre.
    if ($nombre === '') {
        $errores['nombre'] = 'El nombre es obligatorio.';
    } elseif (
        !preg_match("/\A[\p{L}][\p{L}\p{M} '\x{2019}-]{0,59}\z/u", $nombre)
    ) {
        $errores['nombre'] =
            'Introduce un nombre de 2 a 60 caracteres válidos.';
    } elseif (mb_strlen($nombre, 'UTF-8') < 2) {
        $errores['nombre'] =
            'El nombre debe tener al menos 2 caracteres.';
    }

    // 5. Validación del email.
    if ($email === '') {
        $errores['email'] = 'El email es obligatorio.';
    } elseif (
        filter_var($email, FILTER_VALIDATE_EMAIL) === false
    ) {
        $errores['email'] = 'El formato del email no es válido.';
    }

    // 6. Validación del videojuego.
    if ($videojuego === '') {
        $errores['videojuego'] =
            'Debes seleccionar un videojuego.';
    } elseif (!in_array(
        $videojuego,
        array_keys($videojuegos),
        true
    )) {
        $errores['videojuego'] =
            'El videojuego seleccionado no está disponible.';
    }

    // 7. Validación de la cantidad.
    if ($cantidad === '') {
        $errores['cantidad'] = 'La cantidad es obligatoria.';
    } else {
        $cantidadNumerica = filter_var(
            $cantidad,
            FILTER_VALIDATE_INT
        );

        if (
            $cantidadNumerica === false
            || $cantidadNumerica < 1
            || $cantidadNumerica > 5
        ) {
            $errores['cantidad'] =
                'La cantidad debe ser un entero entre 1 y 5.';
        } else {
            $cantidad = (string) $cantidadNumerica;
        }
    }

    // 8. Validación de la fecha.
    if ($fecha === '') {
        $errores['fecha'] = 'La fecha es obligatoria.';
    } else {
        $fechaObjeto = DateTimeImmutable::createFromFormat(
            '!Y-m-d',
            $fecha
        );

        $erroresFecha = DateTimeImmutable::getLastErrors();

        $fechaCorrecta =
            $fechaObjeto !== false
            && $fechaObjeto->format('Y-m-d') === $fecha
            && (
                $erroresFecha === false
                || (
                    $erroresFecha['warning_count'] === 0
                    && $erroresFecha['error_count'] === 0
                )
            );

        if (!$fechaCorrecta) {
            $errores['fecha'] =
                'Introduce una fecha real con formato AAAA-MM-DD.';
        } elseif ($fecha < date('Y-m-d')) {
            $errores['fecha'] =
                'La fecha no puede ser anterior al día actual.';
        }
    }

    // 9. Solo aceptamos la reserva si no hay errores.
    $reservaValida = empty($errores);
}

// Escapamos siempre los valores que se insertan en HTML.
function e($valor): string {
    return htmlspecialchars(
        (string) $valor,
        ENT_QUOTES | ENT_SUBSTITUTE,
        'UTF-8'
    );
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Reserva de videojuegos</title>
</head>
<body>
    <h1>Reserva de videojuegos</h1>

    <?php if ($reservaValida): ?>
        <h2>¡Reserva validada correctamente!</h2>
        <p>Nombre: <?= e($nombre) ?></p>
        <p>Email: <?= e($email) ?></p>
        <p>Videojuego: <?= e($videojuegos[$videojuego]) ?></p>
        <p>Cantidad: <?= e($cantidad) ?></p>
        <p>Fecha de reserva: <?= e($fecha) ?></p>

    <?php else: ?>

        <?php if (!empty($errores)): ?>
            <div role="alert" aria-labelledby="errores-titulo">
                <h2 id="errores-titulo">
                    Corrige los siguientes errores:
                </h2>
                <ul>
                    <?php foreach ($errores as $mensaje): ?>
                        <li><?= e($mensaje) ?></li>
                    <?php endforeach; ?>
                </ul>
            </div>
        <?php endif; ?>

        <form method="POST" action="reserva.php">
            <label for="nombre">Nombre:</label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                required
                minlength="2"
                maxlength="60"
                value="<?= e($nombre) ?>"
            >
            <?php if (isset($errores['nombre'])): ?>
                <p><?= e($errores['nombre']) ?></p>
            <?php endif; ?>

            <label for="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                required
                value="<?= e($email) ?>"
            >
            <?php if (isset($errores['email'])): ?>
                <p><?= e($errores['email']) ?></p>
            <?php endif; ?>

            <label for="videojuego">Videojuego:</label>
            <select id="videojuego" name="videojuego" required>
                <option value="">Selecciona uno</option>
                <?php foreach ($videojuegos as $id => $titulo): ?>
                    <option
                        value="<?= e($id) ?>"
                        <?= $videojuego === $id ? 'selected' : '' ?>
                    >
                        <?= e($titulo) ?>
                    </option>
                <?php endforeach; ?>
            </select>
            <?php if (isset($errores['videojuego'])): ?>
                <p><?= e($errores['videojuego']) ?></p>
            <?php endif; ?>

            <label for="cantidad">Cantidad (1-5):</label>
            <input
                type="number"
                id="cantidad"
                name="cantidad"
                min="1"
                max="5"
                step="1"
                required
                value="<?= e($cantidad) ?>"
            >
            <?php if (isset($errores['cantidad'])): ?>
                <p><?= e($errores['cantidad']) ?></p>
            <?php endif; ?>

            <label for="fecha">Fecha de reserva:</label>
            <input
                type="date"
                id="fecha"
                name="fecha"
                min="<?= e(date('Y-m-d')) ?>"
                required
                value="<?= e($fecha) ?>"
            >
            <?php if (isset($errores['fecha'])): ?>
                <p><?= e($errores['fecha']) ?></p>
            <?php endif; ?>

            <button type="submit">Validar reserva</button>
        </form>

    <?php endif; ?>
</body>
</html>

```

### **Una observación sobre el código**

La expresión regular del nombre utiliza caracteres Unicode para aceptar nombres con tildes y letras de distintos idiomas. La función `mb_strlen()` cuenta caracteres multibyte correctamente, por lo que requiere la extensión `mbstring` de PHP. No es una dependencia externa, pero sí una extensión de PHP que debe estar habilitada.

Si tu entorno docente no dispone de `mbstring`, conviene habilitarla o adaptar la comprobación de longitud al entorno utilizado.

## **4. Cómo funciona cada herramienta de PHP**

Estas son las herramientas que debes conocer para comprender y defender el ejercicio en clase.

### `$_POST`

Es una variable superglobal que contiene los datos enviados mediante una petición HTTP POST, normalmente como pares de nombre y valor.

Por ejemplo, si el formulario envía un nombre y una cantidad:

```
$nombre = $_POST['nombre'];
$cantidad = $_POST['cantidad'];
```

En nuestro ejercicio, los datos llegan al servidor con los nombres definidos en los atributos `name` de los campos HTML.

**Importante:** los valores recibidos suelen ser cadenas de texto. Además, un atacante puede enviar un campo como `cantidad[]`, haciendo que el valor sea un array en lugar de una cadena. Por eso comprobamos el tipo antes de utilizar funciones como `trim()`.

### `$_SERVER["REQUEST_METHOD"]`

Permite conocer el método HTTP de la petición.

```
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Procesar y validar los datos recibidos.
}
```

Esto evita procesar la reserva como si se hubiera enviado cuando el usuario simplemente ha abierto la página mediante GET.

### `isset()`

Comprueba si una variable o un elemento existe y no tiene valor `null`.

```
if (isset($_POST['nombre'])) {
    // El campo existe y no es null.
}
```

No garantiza que el dato sea válido ni que tenga el tipo esperado. Por eso en el ejercicio combinamos `isset()` con `is_string()`.

### `trim()`

Elimina espacios en blanco al principio y al final de una cadena.

```
$nombre = trim($_POST['nombre']);
```

Por ejemplo, `"  Ana Pérez  "` pasa a ser `"Ana Pérez"`.

Esto permite evitar que un campo que contiene únicamente espacios se acepte como si tuviera un nombre real. `trim()` no valida el formato ni elimina todos los espacios internos.

### `filter_var()`

Permite aplicar filtros y validaciones a determinados valores.

Para el email:

```
if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    $errores['email'] = 'El formato del email no es válido.';
}
```

Para la cantidad:

```
$cantidadNumerica = filter_var(
    $cantidad,
    FILTER_VALIDATE_INT
);
```

Si el valor no representa un entero válido, el resultado será `false`. Es importante comparar con `=== false`, ya que el número `0` también puede convertirse en un resultado de tipo entero y no debe confundirse con el valor booleano `false`.

La validación de email comprueba su formato, pero no garantiza que el buzón exista o que pertenezca al usuario.

### `in_array()`

Comprueba si un valor aparece dentro de un array.

```
if (!in_array($videojuego, array_keys($videojuegos), true)) {
    $errores['videojuego'] = 'Videojuego no autorizado.';
}
```

El tercer argumento, `true`, activa la comparación estricta: el valor debe coincidir también en tipo.

Esta comprobación es esencial porque el usuario podría manipular el HTML para enviar un identificador que no figura en las opciones visibles.

En una aplicación real, el catálogo autorizado normalmente procede de la base de datos, y se debe comprobar también que el producto esté disponible.

### `empty()`

Comprueba si una variable está vacía según las reglas de PHP. Por ejemplo, devuelve `true` para `''`, `null`, `false`, `0` y `'0'`.

En nuestro programa:

```
$reservaValida = empty($errores);
```

Como el array empieza vacío y añadimos un error por cada campo incorrecto, esta instrucción significa que la reserva solo supera la validación si no existe ningún error.

No debemos usar `empty()` indiscriminadamente para validar números, porque el valor `'0'` se considera vacío. Para esos casos es mejor validar el tipo y el rango explícitamente.

### **Arrays de errores**

El array `$errores` guarda los mensajes asociados a los campos que no superan las reglas.

```
$errores = [];

$errores['email'] = 'El email no es válido.';
$errores['cantidad'] = 'La cantidad debe estar entre 1 y 5.';
```

Ventajas:

- Permite validar todos los campos en una sola petición.
- Evita detener la ejecución al encontrar el primer error.
- Facilita mostrar un resumen de errores y mensajes junto a cada campo.
- Permite mantener los valores introducidos para que el usuario no tenga que empezar de nuevo.

### `htmlspecialchars()`

Convierte caracteres especiales de HTML en entidades seguras para mostrarlos como texto.

```
echo htmlspecialchars(
    $nombre,
    ENT_QUOTES | ENT_SUBSTITUTE,
    'UTF-8'
);
```

Por ejemplo, si alguien introduce un texto que contiene etiquetas HTML o JavaScript, no queremos que el navegador lo interprete como código ejecutable.

Esta función se utiliza al **mostrar** datos dentro del HTML, no como sustituto de la validación. En nuestro ejemplo está encapsulada en la función `e()` para evitar repetir la llamada en cada salida.

## **5. Caso práctico A: envío válido**

Supongamos que el usuario introduce estos datos:

Nombre

**Ana Pérez**

Email

ana\@example.com

Videojuego

Elden Ring

Cantidad

2

Fecha

2026-10-20

Suponiendo que la fecha actual sea el 16 de octubre de 2026, el procesamiento sería el siguiente:

1. PHP detecta que la petición utiliza POST.
2. Obtiene los valores y elimina los espacios exteriores de los campos correspondientes.
3. Comprueba que el nombre cumple las reglas.
4. Valida el formato del email.
5. Comprueba que el identificador `elden_ring` pertenece al catálogo.
6. Convierte y valida la cantidad como entero entre 1 y 5.
7. Verifica que la fecha existe y no está en el pasado.
8. Como no se ha añadido ningún error, `empty($errores)` devuelve `true`.

El usuario verá una confirmación similar a esta:

## **¡Reserva validada correctamente!**

Nombre: Ana Pérez

Email: ana\@example.com

Videojuego: Elden Ring

Cantidad: 2

Fecha de reserva: 2026-10-20

En esta práctica, «reserva validada» significa que los datos han superado las comprobaciones. Todavía no se ha guardado una reserva en una base de datos ni se ha comprobado el stock real.

## **6. Caso práctico B: envío incorrecto con varios errores**

Ahora imaginemos que alguien manipula o rellena el formulario con estos datos:

| Campo      | Valor enviado | Motivo del error                         |
| ---------- | ------------- | ---------------------------------------- |
| Nombre     | `A`           | Tiene menos de dos caracteres.           |
| Email      | `ana@@correo` | Formato de email incorrecto.             |
| Videojuego | `gta_vi`      | El identificador no está en el catálogo. |
| Cantidad   | `8`           | Supera el máximo de cinco unidades.      |
| Fecha      | `2020-02-30`  | Es una fecha inexistente.                |

Aunque el navegador tenga atributos como `required`, `min` o `max`, el servidor debe comprobar todos estos casos por sí mismo.

### **¿Cómo detecta PHP cada error?**

**1. Nombre**

PHP detecta que el nombre no cumple la longitud mínima.

```

elseif (mb_strlen($nombre, 'UTF-8') < 2) {
    $errores['nombre'] =
        'El nombre debe tener al menos 2 caracteres.';
}

```

Mensaje: El nombre debe tener al menos 2 caracteres.

**2. Email**

El filtro no reconoce una dirección de correo con un formato válido.

```

if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    $errores['email'] = 'El formato del email no es válido.';
}

```

Mensaje: El formato del email no es válido.

**3. Videojuego**

El identificador recibido no coincide con ninguna clave autorizada.

```

if (!in_array($videojuego, array_keys($videojuegos), true)) {
    $errores['videojuego'] =
        'El videojuego seleccionado no está disponible.';
}

```

Mensaje: El videojuego seleccionado no está disponible.

**4. Cantidad**

El valor es un entero, pero incumple la regla de negocio: máximo cinco.

```

if ($cantidadNumerica === false
    || $cantidadNumerica < 1
    || $cantidadNumerica > 5) {
    $errores['cantidad'] =
        'La cantidad debe ser un entero entre 1 y 5.';
}

```

Mensaje: La cantidad debe ser un entero entre 1 y 5.

**5. Fecha**

PHP detecta que la fecha no se corresponde con una fecha de calendario válida.

```

if (!$fechaCorrecta) {
    $errores['fecha'] =
        'Introduce una fecha real con formato AAAA-MM-DD.';
}

```

Mensaje: Introduce una fecha real con formato AAAA-MM-DD.

### **Resultado que verá el usuario**

PHP acumula los errores y los muestra juntos, sin procesar la reserva como válida.

## **Corrige los siguientes errores:**

- El nombre debe tener al menos 2 caracteres.
- El formato del email no es válido.
- El videojuego seleccionado no está disponible.
- La cantidad debe ser un entero entre 1 y 5.
- Introduce una fecha real con formato AAAA-MM-DD.

El formulario vuelve a aparecer y conserva los valores introducidos cuando es seguro hacerlo, para que el usuario pueda corregirlos.

Observa que los cinco errores pueden detectarse en la misma petición. Esto se consigue utilizando un array de errores en lugar de detener el programa después de la primera comprobación fallida.

## **7. Buenas prácticas de validación y seguridad**

La validación es una parte de la seguridad del backend, pero no sustituye al resto de medidas necesarias.

**1. Validar siempre en el servidor**

No des por válido un dato porque el navegador lo haya aceptado. Repite todas las reglas importantes en PHP.

**2. Aplicar listas permitidas**

Para el videojuego, comprueba que el identificador pertenece al catálogo. Es más seguro aceptar opciones conocidas que intentar detectar todas las entradas no permitidas.

**3. Escapar la salida HTML**

Utiliza `htmlspecialchars()` al insertar datos externos en HTML, atributos o mensajes. No confundas escapar la salida con validar la entrada: son operaciones diferentes.

**4. Utilizar consultas preparadas**

Si guardas reservas en MySQL, utiliza PDO o MySQLi con consultas preparadas. No construyas sentencias SQL concatenando directamente valores recibidos.

**5. Comprobar disponibilidad real**

Una fecha válida y un videojuego autorizado no garantizan que exista stock. Consulta la disponibilidad y controla las reservas simultáneas antes de confirmar definitivamente.

**6. Proteger las operaciones**

En una aplicación real, considera protección CSRF para formularios autenticados, límites de peticiones cuando proceda, control de acceso y mensajes de error que no revelen información interna.

**7. Probar casos límite**

Comprueba campos vacíos, espacios, caracteres Unicode, números negativos, decimales, cantidades excesivas, fechas imposibles, campos ausentes y valores enviados como arrays.

## **8. Resumen para estudiar**

| Herramienta                  | Función principal                                   |
| ---------------------------- | --------------------------------------------------- |
| `$_POST`                     | Recoger los datos enviados por POST.                |
| `$_SERVER['REQUEST_METHOD']` | Identificar el método HTTP utilizado.               |
| `isset()`                    | Comprobar si un campo existe y no es `null`.        |
| `trim()`                     | Eliminar espacios exteriores.                       |
| `filter_var()`               | Validar formatos y tipos admitidos.                 |
| `in_array()`                 | Comprobar pertenencia a una lista autorizada.       |
| `empty()`                    | Comprobar si un valor se considera vacío según PHP. |
| `$errores = []`              | Acumular los errores detectados.                    |
| `htmlspecialchars()`         | Escapar caracteres especiales al generar HTML.      |

La idea que debes recordar como estudiante de 2.º DAW es esta: **recibir datos no significa aceptarlos; primero hay que validarlos, después aplicar las reglas de negocio y, finalmente, procesarlos de forma segura.**

Una última distinción importante: en el ejercicio hemos implementado la validación y la respuesta HTML. Para convertirlo en un sistema de reservas real, el siguiente paso sería guardar la reserva en una base de datos, verificar el stock y evitar duplicados o conflictos entre reservas concurrentes.
