# Respuesta prompt débil

Voy a crear una página de reservas genérica (elegir servicio, fecha, hora y datos de contacto) que luego podrás adaptar a tu negocio.

Tienes la página de reservas publicada. Como no me dijiste el tipo de negocio, la monté como reserva de mesa para un restaurante de ejemplo (Fogón Marea): eliges comensales, día, hora y zona, rellenas tus datos y ves el resumen al lado.

Las horas ocupadas son de ejemplo y la reserva no se envía a ningún sitio, solo se muestra un código de confirmación en la propia página. No la he revisado en pantalla antes de publicarla.

Dime qué negocio es (peluquería, clínica, clases, alquiler…) y la adapto con sus servicios, horarios y textos. Si quieres que las reservas se guarden de verdad y bloqueen horas para los demás visitantes, también se puede añadir.

# Respuesta prompt fuerte

Voy a montar el proyecto completo en archivos: base de datos MySQL, backend PHP, interfaz y README para la memoria del proyecto. Primero compruebo qué hay disponible para poder validar la sintaxis.

Núcleo PHP terminado (sesiones seguras, CSRF, 2FA, reglas de reserva). Ahora escribo las páginas de usuario y luego el panel de administración.

Ya está escrito todo el código y el README. Ahora compruebo la sintaxis de todos los archivos PHP y pruebo las validaciones.

Tienes el proyecto completo en `reservas-deportivas.zip`. Es la aplicación SportBook, hecha solo con HTML5, CSS3, JavaScript, PHP y MySQL, sin librerías ni fuentes externas.

No he podido probarla contra MySQL (en mi entorno no hay servidor de base de datos). Esto es lo que sí he comprobado:

- Los 28 archivos PHP pasan la comprobación de sintaxis.
- 28 pruebas de validación y escape de salida pasan sin fallos.
- Arrancada con el servidor de PHP, las cabeceras de seguridad y la cookie de sesión son correctas, y los envíos sin token CSRF se rechazan.
- Sin sesión iniciada, el panel de administración redirige al login, y el fichero parcial de `admin/` da 404.

Las consultas SQL y el flujo real de registro, 2FA y reserva quedan sin ejecutar. Conviene que lo pruebes tú siguiendo la lista de pruebas manuales del README antes de entregarlo.

## Qué incluye

- **Usuarios:** consultan instalaciones y disponibilidad sin cuenta, se registran con validación en cliente y servidor y verifican el correo con un enlace de un solo uso. Solo con cuenta verificada y sesión iniciada pueden reservar, con 24 h de antelación mínima. Las franjas ocupadas o no disponibles no se pueden reservar. Pueden cancelar sus reservas hasta 24 h antes.
- **Inicio de sesión con 2FA:** primero la contraseña y después un código de 6 dígitos enviado por correo. La sesión no se crea hasta superar el segundo paso.
- **Administración:**
  - Altas, ediciones y bajas de instalaciones.
  - Rangos de fechas disponibles.
  - Horarios semanales, a mano o con un generador de franjas.
  - Listado de reservas con filtros y cancelación.
- **Seguridad:** hash de contraseñas, consultas preparadas, tokens y códigos guardados hasheados con caducidad, CSRF, sesiones seguras, permisos y límite de intentos de login. Todo está en una tabla del README con el archivo donde se cumple cada requisito.
- **Base de datos:** una clave única evita que dos personas reserven la misma franja a la vez.
- **Interfaz responsive:** las tablas se convierten en tarjetas en el móvil y hay modo oscuro.

## Para ponerlo en marcha

1. Importa `database/schema.sql` y luego `database/seed.sql`.
2. Ajusta `config/config.php` con tus datos de BD y cambia la clave `secret`.
3. Crea el administrador con `php scripts/crear_admin.php`.
4. Arranca con `php -S localhost:8000 -t public`.

Con la configuración por defecto los correos no se envían. Se guardan en `storage/mail/`, y ahí encuentras el enlace de verificación y el código 2FA para probar o para la defensa.

Faltan recuperar o cambiar la contraseña y un cliente SMTP real. Están anotados en el README como mejoras posibles.
