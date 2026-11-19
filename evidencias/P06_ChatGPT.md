# Respuesta prompt débil

Imagen guardada en evidencias como P06_debil.jpg

# Respuesta prompt fuerte

Sportiva — Plataforma de reservas deportivas
He preparado un prototipo web para tu proyecto de 2.º de Desarrollo de Aplicaciones Web (DAW), con una interfaz moderna, responsive y una base de aplicación real en PHP y MySQL.

La idea es que Sportiva permita a adolescentes desde 16 años, grupos de amigos y adultos encontrar instalaciones deportivas, consultar horarios y reservar con seguridad, sin que la experiencia parezca una aplicación infantil ni una plataforma excesivamente corporativa.

fruto.design

PHP + MySQL
HTML5 + CSS3
JavaScript nativo
Responsive

1. Propuesta UX/UI
   El diseño utiliza una estética deportiva contemporánea: verde oscuro, tonos crema, acentos lima y tarjetas con imágenes. La navegación prioriza encontrar una instalación y reservar sin pasos innecesarios.

Verde deportivo

Acciones principales, botones y marca.

#17634E

Crema y lima

Fondos suaves y acentos visuales.

#F8F8F2 · #D8F36A

Principios de diseño:

- Catálogo visual con tarjetas de instalaciones, deporte, ubicación, características y disponibilidad.
- Filtros por nombre, zona y tipo de deporte.
- Ficha de instalación con horarios seleccionables.
- Área personal para consultar y cancelar reservas.
- Panel de administración separado de la zona pública.
- Formularios legibles, navegación por teclado, foco visible y mensajes de error comprensibles.
- Diseño adaptable a móvil, tablet y escritorio.

2. Arquitectura y estructura del proyecto
   La aplicación utiliza una arquitectura PHP tradicional, adecuada para aprender desarrollo full-stack sin depender de frameworks.
   #chatgpt-mermaid-_r_326_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(237, 237, 237);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_326_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_326_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_326_ .error-icon{fill:rgb(48, 48, 48);}#chatgpt-mermaid-_r_326_ .error-text{fill:rgb(237, 237, 237);stroke:rgb(237, 237, 237);}#chatgpt-mermaid-_r_326_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_326_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_326_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_326_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_326_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_326_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_326_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-_r_326_ .marker.cross{stroke:rgb(175, 175, 175);}#chatgpt-mermaid-_r_326_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-_r_326_ p{margin:0;}#chatgpt-mermaid-_r_326_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(237, 237, 237);}#chatgpt-mermaid-_r_326_ .cluster-label text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-_r_326_ .cluster-label span{color:rgb(237, 237, 237);}#chatgpt-mermaid-_r_326_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_326_ .label text,#chatgpt-mermaid-_r_326_ span{fill:rgb(237, 237, 237);color:rgb(237, 237, 237);}#chatgpt-mermaid-_r_326_ .node rect,#chatgpt-mermaid-_r_326_ .node circle,#chatgpt-mermaid-_r_326_ .node ellipse,#chatgpt-mermaid-_r_326_ .node polygon,#chatgpt-mermaid-_r_326_ .node path{fill:rgb(9, 23, 44);stroke:rgb(31, 78, 148);stroke-width:1px;}#chatgpt-mermaid-_r_326_ .rough-node .label text,#chatgpt-mermaid-_r_326_ .node .label text,#chatgpt-mermaid-_r_326_ .image-shape .label,#chatgpt-mermaid-_r_326_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_326_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_326_ .rough-node .label,#chatgpt-mermaid-_r_326_ .node .label,#chatgpt-mermaid-_r_326_ .image-shape .label,#chatgpt-mermaid-_r_326_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_326_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_326_ .root .anchor path{fill:rgb(175, 175, 175)!important;stroke-width:0;stroke:rgb(175, 175, 175);}#chatgpt-mermaid-_r_326_ .arrowheadPath{fill:rgb(175, 175, 175);}#chatgpt-mermaid-_r_326_ .edgePath .path{stroke:rgb(175, 175, 175);stroke-width:1px;}#chatgpt-mermaid-_r_326_ .flowchart-link{stroke:rgb(175, 175, 175);fill:none;}#chatgpt-mermaid-_r_326_ .edgeLabel{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-_r_326_ .edgeLabel p{background-color:rgb(0, 0, 0);}#chatgpt-mermaid-_r_326_ .edgeLabel rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-_r_326_ .labelBkg{background-color:rgba(0, 0, 0, 0.5);}#chatgpt-mermaid-_r_326_ .cluster rect{fill:rgb(48, 48, 48);stroke:rgba(255, 255, 255, 0.15);stroke-width:1px;}#chatgpt-mermaid-_r_326_ .cluster text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-_r_326_ .cluster span{color:rgb(237, 237, 237);}#chatgpt-mermaid-_r_326_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(48, 48, 48);border:1px solid rgba(255, 255, 255, 0.15);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_326_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(237, 237, 237);}#chatgpt-mermaid-_r_326_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_326_ .icon-shape,#chatgpt-mermaid-_r_326_ .image-shape{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-_r_326_ .icon-shape p,#chatgpt-mermaid-_r_326_ .image-shape p{background-color:rgb(0, 0, 0);padding:2px;}#chatgpt-mermaid-_r_326_ .icon-shape .label rect,#chatgpt-mermaid-_r_326_ .image-shape .label rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-_r_326_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_326_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_326_ .node .neo-node{stroke:rgb(31, 78, 148);}#chatgpt-mermaid-_r_326_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_326_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_326_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_326_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_326_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_326_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_326_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_326_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_326_ [data-look="neo"].node .neo-line path{stroke:rgb(31, 78, 148);filter:none;}#chatgpt-mermaid-_r_326_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_326_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_326_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_326_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_326_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_326_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_326_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_326_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(153, 206, 255);}#chatgpt-mermaid-_r_326_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(153, 206, 255);}#chatgpt-mermaid-_r_326_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_326_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_326_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-width:1px;}#chatgpt-mermaid-_r_326_ .node rect,#chatgpt-mermaid-_r_326_ .node circle,#chatgpt-mermaid-_r_326_ .node ellipse,#chatgpt-mermaid-_r_326_ .node polygon,#chatgpt-mermaid-_r_326_ .node path{fill:rgb(0, 40, 77);stroke:rgba(255, 255, 255, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_326_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_326_ .mermaid-decision .label-container{fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_326_ .edgePaths .flowchart-link{stroke:rgb(175, 175, 175);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_326_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-_r_326_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Navegador responsiveHTML5 + CSS3 + JSPáginas PHPAutenticación y autorizaciónLógica de reservasPanel de administraciónMySQL

El proyecto está organizado por responsabilidades:
Archivo Función
index.php Catálogo público y filtros
facility.php Detalles y horarios disponibles
register.php Registro de usuarios
verify.php Verificación del correo
login.php Autenticación inicial
two_factor.php Segundo factor de autenticación
account.php Área personal
my_bookings.php Historial de reservas
book.php Validación y creación de reservas
cancel_booking.php Cancelación de reservas propias
admin.php Gestión de instalaciones y horarios
config.php Configuración y conexión PDO
functions.php Sesiones, permisos, CSRF y utilidades
database/schema.sql Esquema MySQL y datos iniciales
assets/styles.css Sistema visual y responsive
assets/app.js Mejoras progresivas de interacción

3. Modelo de datos MySQL
   El esquema incluido en database/schema.sql define cinco tablas principales y sus relaciones.
   users

Identidad, correo, hash de contraseña, rol, verificación del correo y caducidad del token.

facilities

Nombre, deporte, ubicación, descripción, características y estado de la instalación.

time_slots

Franjas de inicio y fin, instalación asociada y disponibilidad.

bookings

Usuario, horario reservado, estado, fecha de creación y cancelación.

auth_attempts

Registra intentos de autenticación para aplicar límites básicos por correo e IP.

Las relaciones fundamentales son:

- Un usuario puede tener muchas reservas.
- Una instalación puede ofrecer muchos horarios.
- Cada horario puede tener reservas a lo largo de su historial, pero solo una reserva confirmada simultáneamente.
- Las claves foráneas protegen la integridad de los datos.
- Los índices y restricciones únicas ayudan a evitar duplicidades.
  El modelo diferencia entre facilities (instalaciones), time_slots (horarios) y bookings (reservas). Esta separación permite administrar la disponibilidad sin mezclarla con la información de los usuarios.

4. Principales flujos funcionales

Registro y verificación

El usuario crea su cuenta, recibe un enlace de verificación y activa su correo antes de acceder a las reservas.

Inicio de sesión con segundo factor

Se comprueban las credenciales y, después, se solicita un código de seis dígitos enviado por correo, con caducidad y límite de intentos.

Reserva de una instalación

El servidor comprueba la sesión, la verificación del correo, la antelación mínima de 24 horas, la disponibilidad y la existencia de otra reserva. Después registra la operación en una transacción.

Administración

El administrador puede crear instalaciones, añadir horarios y activar u ocultar espacios. Las páginas administrativas verifican el rol en el servidor.

Reglas de negocio implementadas
Regla Aplicación
Solo usuarios autenticados Validación de sesión en el servidor
Correo verificado Comprobación antes de reservar
Antelación mínima 24 horas desde el momento de la reserva
Horarios ocupados Se rechazan antes de confirmar
Reservas duplicadas Restricciones de base de datos y transacción
Cancelaciones Solo las propias y futuras
Administración Control de permisos por rol
Formularios POST Token CSRF y validación de datos

5. Prototipo funcional: archivos del proyecto
   He generado el proyecto con los archivos PHP, CSS, JavaScript y SQL, preparado para descargar y ejecutar en un entorno local.

Sportiva — Proyecto PHP/MySQL

ZIP · 18 archivos · Código fuente y documentación

Descargar el proyecto completo

También puedes consultar el esquema de la base de datos y las instrucciones de instalación.

Cómo ejecutarlo

1. Instala PHP 8.1 o superior, MySQL y un servidor local como XAMPP.
2. Descomprime el ZIP en la carpeta pública de tu servidor, por ejemplo htdocs/sportiva.
3. Importa database/schema.sql en MySQL.
4. Configura los datos de conexión en config.php o mediante variables de entorno.
5. Abre http://localhost/sportiva/index.php.
6. Registra una cuenta y configura el correo saliente para probar la verificación y el segundo factor.
7. Para habilitar el panel administrativo, registra una cuenta y asígnale el rol admin mediante SQL, tal como explica el README.
   Importante: el código está preparado como prototipo ejecutable, pero los envíos de correo dependen de la configuración de mail() del servidor. Las fotografías del catálogo también requieren conexión a Internet. No he podido verificar un recorrido completo de extremo a extremo con una base de datos y correo reales.
8. Comprobación final
   He realizado una comprobación estática de sintaxis PHP sobre los archivos del proyecto. Todos los archivos PHP examinados han superado php -l sin errores de sintaxis.
   Área Resultado de la revisión
   Sintaxis PHP Correcta
   Estructura HTML semántica Incluye header, nav, main, section, article y footer
   Responsive Reglas CSS para escritorio, tablet y móvil
   Accesibilidad Etiquetas de formulario, textos alternativos, foco visible y enlace para saltar al contenido
   Consultas SQL PDO y consultas preparadas en las operaciones principales
   Contraseñas password_hash() y password_verify()
   Sesiones Cookies HttpOnly, SameSite y regeneración de ID al completar el acceso
   Autenticación Verificación de correo y segundo factor por correo
   Reservas Comprobación de 24 horas, disponibilidad y duplicados
   Pruebas de integración Pendientes de ejecutar con MySQL y correo configurados

Mejoras recomendadas antes de entregar
Para que el proyecto alcance un nivel sólido de seguridad y sea más fácil de defender académicamente, recomiendo priorizar:

- Configurar HTTPS y SMTP real; no utilizar mail() sin una configuración adecuada en producción.
- Añadir pruebas automatizadas para reservas simultáneas, límites de autenticación, caducidad de códigos y permisos.
- Revisar el tratamiento de franjas horarias solapadas y las reglas de disponibilidad cuando se cancela una reserva.
- Mejorar el flujo de recuperación de contraseña y la gestión de códigos 2FA.
- Ejecutar pruebas manuales de accesibilidad con teclado y lector de pantalla, además de pruebas responsive en navegadores reales.
  Conclusión: tienes una base de proyecto full-stack con estructura, interfaz, modelo relacional y los principales flujos de usuario implementados. La revisión de sintaxis es satisfactoria, aunque la validación completa de funcionalidad, accesibilidad y seguridad requiere ejecutar y probar la aplicación en un entorno configurado.

También puedo crear una imagen de presentación de Sportiva para incluirla en la memoria del proyecto o en la defensa ante el profesor.
