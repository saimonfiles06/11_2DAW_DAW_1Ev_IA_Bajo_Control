# IA Bajo Control: de prompts débiles a profesionales

Proyecto intermodular · 2.º DAW · Módulo 0616 · 1.ª evaluación · Curso 2026/2027 · Grupo 11
Integrantes: Ignacio Piedrabuena Martínez y Joan Simón Blanch

## 1. Descripción
Banco de ocho prompts profesionales (P01–P08) para tareas de desarrollo web, comparación de ChatGPT y Claude (planes gratuitos), tres plantillas reutilizables y procedimiento de validación con pruebas y documentación oficial. Solo se usan datos ficticios y código propio o de documentación abierta.

## 2. Estructura de la carpeta de evidencias
| Archivo                                                               | Contenido                                    |
| --------------------------------------------------------------------- | -------------------------------------------- |
| `prompts_completos.md`                                                | Texto completo de los prompts P01–P08        |
| `P0X_ChatGPT.md`, `P0X_Claude.md`                                     | Las 16 respuestas iniciales (X = 1–8)        |
| `P01_IT1.md` … `P03_IT2.md`                                           | Las 6 iteraciones                            |
| `enlaces_respuestas.md`                                               | Enlaces a las conversaciones                 |
| `codigo_P02P07.js`                                                    | Código inicial (ejemplo POST con fetch, MDN) |
| `codigo_P07_corregido.js`                                             | Código corregido                             |
| `README.md`                                                           | Este archivo                                 |


## 3. Requisitos
- Node.js 18 o superior (pruebas de P02 y P07; no requiere instalar paquetes).
- PHP 8.x y MySQL 8.x en local (XAMPP o Docker) para P01, P03, P04 y P05.
- Un navegador actual para P01 y P06.
- Git para consultar el historial.


## 4. Limitaciones
- Los prompts P01–P05 no especifican el formato de la respuesta.
- P05 diseña la API; el endpoint se implementa aparte.
- P06 diseña una interfaz propia en lugar de mejorar el prototipo de P01.
- [COMPLETAR: otras limitaciones y pruebas pendientes.]

## 5. Plantillas reutilizables
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

## 6. Historial Git
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

## 7. Fuentes
Mozilla Contributors (2026); Oracle Corporation (s. f.); PHP Documentation Group (s. f.-a a s. f.-d); World Wide Web Consortium (2023); Git (s. f.). Referencias completas en la memoria.

## 8. Declaración de uso de IA
Las respuestas de ChatGPT y Claude se conservan íntegras; el diseño, las pruebas, las decisiones y las plantillas son aportaciones propias del equipo. Ver apartado 6.2 de la memoria.
