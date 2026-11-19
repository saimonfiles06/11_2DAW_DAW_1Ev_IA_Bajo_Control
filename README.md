# IA Bajo Control: de prompts débiles a profesionales

Proyecto intermodular · 2.º DAW · Módulo 0616 · 1.ª evaluación · Curso 2026/2027 · Grupo 11
Integrantes: Ignacio Piedrabuena Martínez y Joan Simón Blanch

## 1. Descripción
Banco de ocho prompts profesionales (P01–P08) para tareas de desarrollo web, comparación de ChatGPT y Claude (planes gratuitos), tres plantillas reutilizables y procedimiento de validación con pruebas y documentación oficial. Solo se usan datos ficticios y código propio o de documentación abierta.

## 2. Estructura de la carpeta de evidencias
| Archivo | Contenido |
|---|---|
| `prompts_completos.docx` | Texto completo de los prompts P01–P08 |
| `P0X_ChatGPT.md`, `P0X_Claude.md` | Las 16 respuestas iniciales (X = 1–8) |
| `P01_IT1.md` … `P03_IT2.md` | Las 6 respuestas de iteración |
| `enlaces_respuestas.md` | Enlaces a las conversaciones |
| `codigo_P02P07.js` | Código inicial (ejemplo POST con fetch, MDN) |
| `codigo_P07_corregido.js` | Código corregido |
| `test_P02P07.js`, `resultado_original.txt`, `resultado_corregido.txt` | Pruebas y resultados de P02 y P07 |
| `README.md` | Este archivo |
| `historial_git.txt` | Historial Git exportado |

## 3. Requisitos
- Node.js 18 o superior (pruebas de P02 y P07; no requiere instalar paquetes).
- PHP 8.x y MySQL 8.x en local (XAMPP o Docker) para P01, P03, P04 y P05.
- Un navegador actual para P01 y P06.
- Git para consultar el historial.

## 4. Ejecución y pruebas
### P02 y P07 (JavaScript)
```bash
node test_P02P07.js codigo_P02P07.js        # código original
node test_P02P07.js codigo_P07_corregido.js # código corregido
```
Levanta un servidor local y prueba seis escenarios: T1 200 con JSON; T2 404 con JSON; T3 500 con HTML; T4 200 con texto; T5 servidor caído; T6 archivo completo con red caída.
Resultado esperado del corregido: T1 correcto y T2–T6 con error controlado y mensaje comprensible. Resultados guardados en `resultado_*.txt`.

### P01, P03, P04, P05, P06 y P08
Sustituir los nombres entre corchetes por los archivos reales de la carpeta.
| Caso | Cómo ejecutarlo | Entrada válida / incorrecta |
|---|---|---|
| P01 | Copiar `[carpeta del proyecto]` a `htdocs` (XAMPP) o montarla en Docker; importar `[esquema.sql]`; abrir `http://localhost/[carpeta]/` | Reserva con sesión y 24 h o más / sin sesión, con menos de 24 h o en horario ocupado |
| P03 | Copiar `[formulario.php]` a `htdocs`; abrir `http://localhost/[formulario.php]` | Ana Pérez, ana@example.com, 2 unidades, fecha futura / campos vacíos, ana@, cantidad 0, fecha pasada |
| P04 | `mysql -u [usuario] -p < [esquema.sql]` y después las seis consultas de `[consultas.sql]` | Pedido con cliente existente / pedido con cliente inexistente |
| P05 | Arrancar el servidor local y ejecutar `curl -i http://localhost/[ruta]/reservas/1` | `GET /reservas/1` existente / `GET /reservas/9999` |
| P06 | Abrir `[prototipo.html]` en el navegador; recorrer con Tab y comprobar contraste con las herramientas del navegador | Navegación completa por teclado / controles sin foco o con contraste inferior a 4,5:1 |
| P08 | En un entorno limpio, seguir este README y ejecutar `git log --oneline` | Los pasos reproducen los ejemplos / historial con commits descriptivos |

## 5. Pruebas
Cada prueba indica la entrada, el resultado esperado, el resultado real y la conclusión. Las filas marcadas con [COMPLETAR] deben rellenarse tras ejecutar el ejemplo.

| Caso | Entrada | Resultado esperado | Resultado real | Conclusión |
|---|---|---|---|---|
| P01 | Tres reservas: sin iniciar sesión, con menos de 24 h de antelación y en un horario ocupado. | Las tres se rechazan con un mensaje comprensible. | **[Completar tras ejecutar]** | **[Completar]** |
| P02 | Ejecutar postData() original y corregido con servidor local: T1 respuesta 200 con JSON válido; T5 servidor caído; T6 archivo completo con red caída. | T1 devuelve los datos; T5 y T6 muestran un error de red comprensible y controlado. | *Original:* T1 correcto; T5 TypeError: fetch failed; T6 sin controlar (código de salida 1). *Corregido:* T1 correcto; T5 y T6 con el mensaje «Error de red…» (salida 0). | Fallo de red sin tratar en el original; corregido con try…catch y .catch(). |
| P03 | Válida: Ana Pérez, ana@example.com, 2 unidades, fecha futura. Incorrecta: nombre vacío, ana@, cantidad 0, fecha pasada y <script> en el nombre. | Válida: confirmación sin errores. Incorrecta: un mensaje por campo y el <script> mostrado como texto. | **[Completar tras ejecutar]** | **[Completar]** |
| P04 | Ejecutar el script en MySQL 8 desde cero; insertar un pedido con cliente inexistente; borrar un cliente con pedidos; lanzar las seis consultas. | Sin errores; la clave foránea rechaza el pedido huérfano; el borrado respeta ON DELETE; las consultas devuelven lo esperado. | **[Completar tras ejecutar]** | **[Completar]** |
| P05 | Endpoint implementado (p. ej., GET /reservas/{id}): petición con id existente y con id inexistente; POST con datos inválidos. | 200 con JSON; 404 con JSON de error; 400 o 422 con detalle de validación. | **[Completar tras implementar y probar]** | **[Completar]** |
| P06 | Recorrer la pantalla solo con teclado; revisar etiquetas y contraste (mínimo 4,5:1) según WCAG 2.2. | Todo control es accesible con foco visible; cada campo tiene etiqueta; el contraste cumple. | **[Completar tras comprobar]** | **[Completar]** |
| P07 | T2: respuesta 404 con JSON de error; T3: 500 con cuerpo HTML; T4: 200 con texto que no es JSON. | El 404 y el 500 se tratan como error HTTP; el texto no JSON, como respuesta no válida. | *Original:* T2 aceptado como éxito con {"error":"No encontrado"}; T3 y T4 SyntaxError sin mensaje útil. *Corregido:* «Error HTTP 404: Not Found», «Error HTTP 500…» y «La respuesta del servidor no es JSON válido». | Fallo prioritario reproducido (T2: un error HTTP se trata como éxito) y corregido. |
| P08 | Seguir el README en un entorno limpio; ejecutar git log --oneline. | Los ejemplos se ejecutan siguiendo los pasos; el historial muestra commits descriptivos. | **[Completar tras ejecutar]** | **[Completar]** |

Pruebas P02 y P07: ver `resultado_original.txt` y `resultado_corregido.txt`; se reproducen con los comandos del apartado 4.

## 6. Limitaciones
- Los prompts P01–P05 no especifican el formato de la respuesta.
- P05 diseña la API; el endpoint se implementa aparte.
- P06 diseña una interfaz propia en lugar de mejorar el prototipo de P01.
- [COMPLETAR: otras limitaciones y pruebas pendientes.]

## 7. Plantillas reutilizables
Las variables entre corchetes se sustituyen por el contenido de cada caso.

### Plantilla 1. Diseño y desarrollo (P01, P03, P05, P06)
```
Actúa como [ROL] experto en [ESPECIALIDAD]. Tu tarea es [TAREA].
Contexto: [CONTEXTO].
Restricciones: [RESTRICCIONES].
Formato de respuesta: [FORMATO].
```
**Ejemplo:** Actúa como desarrollador full-stack senior experto en HTML5, CSS3 y JavaScript. Tu tarea es crear una pantalla con un formulario de registro de socios. Contexto: club de fútbol ficticio, proyecto de 2.º DAW con datos ficticios. Restricciones: validación básica de campos, contraste accesible y buenas prácticas anti-scripting. Formato: index.html, estilos.css y script.js con una explicación breve.
**Comprobar:** etiquetas semánticas, navegación por teclado y contraste (WCAG 2.2); ejecutar en local y contrastar con documentación oficial.

### Plantilla 2. Revisión y depuración (P02, P07)
```
Actúa como [ROL] especialista en [ESPECIALIDAD]. Tu tarea es [TAREA].
Contexto: [CONTEXTO].
Código a revisar: [ENTRADA].
Restricciones: [RESTRICCIONES].
Formato de respuesta: [FORMATO].
```
**Ejemplo:** Actúa como auditor de código especialista en refactorización. Tu tarea es evaluar vulnerabilidades del código siguiente. Contexto: formulario PHP de un proyecto de 2.º DAW. Código: `<?php echo "Hola " . $_POST['nombre']; ?>`. Restricciones: no reescribas todo el código y explica brevemente cada fallo. Formato: tabla con fallo, riesgo y corrección.
**Comprobar:** reproducir el fallo antes y después (enviar `<script>alert(1)</script>` y comprobar que se muestra como texto) y contrastar con la documentación oficial.

### Plantilla 3. Base de datos y documentación (P04, P08)
```
Actúa como [ROL] experto en [ESPECIALIDAD]. Tu tarea es [TAREA].
Contexto: [CONTEXTO].
Material de entrada: [ENTRADA].
Restricciones: [RESTRICCIONES].
Formato de respuesta: [FORMATO].
```
**Ejemplo:** Actúa como arquitecto de software experto en bases de datos relacionales. Tu tarea es revisar el esquema y proponer mejoras para reducir el tiempo de las consultas. Contexto: gestión de pedidos de una tienda de videojuegos ficticia. Esquema: `CREATE TABLE pedidos (id INT PRIMARY KEY, cliente_id INT, fecha DATE);`. Restricciones: MySQL 8.x. Formato: tabla resumen y conclusión con valoración global.
**Comprobar:** ejecutar el script en un servidor local (XAMPP o Docker) y verificar que las consultas devuelven los mismos resultados.

## 8. Historial Git
Se mantiene un repositorio con commits descriptivos (por ejemplo, `P02: añade comprobación de response.ok`, `README: añade instrucciones de ejecución`) que permiten seguir los cambios de cada caso.

Exportar el historial a la carpeta de evidencias:
```bash
git log --date=short --pretty=format:"%h %ad %an %s" > historial_git.txt
```
Si no se da acceso al repositorio, exportarlo completo para el docente:
```bash
git bundle create banco_prompts.bundle --all
```
Repositorio accesible al docente: [COMPLETAR: URL y permisos de lectura concedidos, o indicar que se entrega `historial_git.txt` / `banco_prompts.bundle`].

## 9. Fuentes
Mozilla Contributors (2026); Oracle Corporation (s. f.); PHP Documentation Group (s. f.-a a s. f.-d); World Wide Web Consortium (2023); Git (s. f.). Referencias completas en la memoria.

## 10. Declaración de uso de IA
Las respuestas de ChatGPT y Claude se conservan íntegras; el diseño, las pruebas, las decisiones y las plantillas son aportaciones propias del equipo. Ver apartado 6.2 de la memoria.
