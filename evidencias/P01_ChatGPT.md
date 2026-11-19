# Respuesta prompt débil

¡Claro! Vamos a crear una página web de reservas moderna, elegante y fácil de usar, con un formulario para que los clientes puedan elegir una fecha, una hora y el número de personas, y enviar su solicitud de reserva.

Como todavía no me has indicado el tipo de negocio, te propongo una base adaptable a restaurantes, hoteles, peluquerías, centros de estética o cualquier negocio que trabaje con citas.

## **Tu página web ya está creada**

[Restro: Free Restaurant Website Template by Tanjim Islam — Framer Marketplace](https://images.openai.com/static-rsc-4/9Nvzek47LlasdxO7MNcsdyGF1BuHkb6gh83Hf3e8kfAJB7B6NN5nSVjo5lwHU2yhGT6ParrD67BRjd4GrkM4DQhjrVn19aG-fzHIbpmaveUTzljlp55wjTLyhg8MfQeBx2R_U7BWLev-IKo1nVysYdMHDnHGP3IvlgAKBb3mO8U?purpose=inline)

**Buenplan — Reservas online**

Diseño adaptable a móviles y ordenadores, con tonos verdes, estilo elegante y formulario interactivo.

Descargar la página web (.html)

### **¿Qué incluye?**

- Formulario de reservas con fecha y hora.
- Selección del número de personas.
- Datos de contacto del cliente.
- Campo para peticiones especiales.
- Confirmación visual y resumen de la reserva.
- Diseño adaptable a móviles y ordenadores.

**Cómo abrirla:** descarga el archivo y haz doble clic para abrirlo en tu navegador.

Importante: el formulario funciona como demostración, pero todavía no envía las reservas a un correo ni guarda los datos en una base de datos. Para usarlo con clientes reales, hay que conectar ese sistema.

## **Vamos a personalizarla**

¿Para qué negocio será la página?

Restaurante o bar

Hotel o alojamiento

Peluquería o centro de estética

Citas para servicios o profesionales

Otro tipo de negocio

Nombre del negocio

Estilo visual

Elegante y moderno

Minimalista y limpio

Colorido y juvenil

Lujo y exclusivo

¿Qué quieres que haga?

Solo mostrar el formulario

Recibir reservas por correo

Guardar reservas y controlar disponibilidad

Permitir reservas con pago online

Crear mi versión personalizada

También puedo crear un logotipo o una imagen de portada exclusiva para tu página.

# Respuesta prompt fuerte

# **Aplicación web de reservas de instalaciones deportivas**

Voy a plantearla como un proyecto full-stack de 2.º de DAW, con una arquitectura sencilla de mantener, separación entre lógica y presentación y medidas de seguridad aplicadas tanto en PHP como en MySQL.

La solución utilizará exclusivamente **HTML5, CSS3, JavaScript nativo, PHP y MySQL**, sin frameworks ni librerías externas. Para el envío de correos se utilizará la función nativa de PHP `mail()` o la configuración SMTP del servidor, sin incorporar bibliotecas de terceros.

## **1. Funcionalidades de la aplicación**

**Reservas deportivas**

Consultar instalaciones, seleccionar fecha y horario, comprobar disponibilidad y reservar con un mínimo de 24 horas de antelación.

**Registro y autenticación segura**

Registro con validación, verificación del correo electrónico, inicio de sesión con contraseña y segundo factor de autenticación (2FA) mediante código de seis dígitos.

**Panel de administración**

Gestión de instalaciones, franjas horarias, disponibilidad, reservas y usuarios, con control de permisos según el rol.

## **2. Descarga del proyecto completo**

## **Reservas deportivas — Full-stack**

PHP · MySQL · HTML5 · CSS3 · JavaScript

17 archivos · Proyecto comprimido ZIP

Descargar el proyecto completo

Incluye código fuente, esquema de base de datos, estilos, formularios y documentación de instalación.

## **3. Arquitectura del proyecto**

El proyecto está organizado para que puedas estudiarlo, ampliarlo y explicarlo en la presentación de DAW.

```
reservas_deportivas/
├── app/
│   └── bootstrap.php
├── config/
│   ├── config.example.php
│   └── .htaccess
├── database/
│   └── schema.sql
├── public/
│   ├── index.php
│   ├── register.php
│   ├── verify.php
│   ├── login.php
│   ├── two-factor.php
│   ├── book.php
│   ├── my-bookings.php
│   ├── admin.php
│   ├── logout.php
│   └── assets/
│       ├── style.css
│       └── app.js
└── README.md
```

## **4. Base de datos MySQL**

El esquema incluye estas tablas principales:

| Tabla                      | Función                                                   |
| -------------------------- | --------------------------------------------------------- |
| `users`                    | Usuarios, contraseñas cifradas mediante hash y roles      |
| `email_verifications`      | Tokens para verificar el correo                           |
| `two_factor_codes`         | Códigos 2FA, caducidad e intentos                         |
| `facilities`               | Instalaciones deportivas                                  |
| `availability_slots`       | Fechas, horarios y disponibilidad                         |
| `reservations`             | Reservas y sus estados                                    |
| `active_reservation_slots` | Impide asignar una misma franja a varias reservas activas |

Las relaciones utilizan claves foráneas y las consultas de PHP emplean PDO con consultas preparadas.

## **5. Seguridad implementada**

**Contraseñas**

password_hash() y password_verify().

**Verificación de correo**

Token aleatorio, hash almacenado y caducidad de 24 horas.

**Autenticación 2FA**

Código de seis dígitos, cinco minutos de validez y límite de intentos.

**Control de acceso**

Solo usuarios autenticados y con correo verificado pueden reservar.

**Prevención de conflictos**

Transacciones, bloqueo de filas y restricción de reservas activas.

**Validación de reservas**

Comprobación en servidor de disponibilidad y antelación mínima de 24 horas.

**Sesiones y formularios**

Regeneración de sesión, cookies HttpOnly, SameSite y tokens CSRF.

## **6. Cómo ejecutarlo en tu ordenador**

1. Instala XAMPP o un entorno equivalente con PHP y MySQL.
2. Descomprime el ZIP en la carpeta pública del servidor, por ejemplo `htdocs`.
3. Importa `database/schema.sql` desde phpMyAdmin.
4. Copia `config/config.example.php` a `config/config.php` y configura la conexión con MySQL y la URL local.
5. Configura el envío de correos del servidor para que funcionen la verificación de email y el segundo factor.
6. Registra un usuario y verifica su correo. Para habilitar el administrador inicial, cambia manualmente su campo `role` a `admin` en MySQL.

Abre después la dirección local correspondiente, por ejemplo `http://localhost/reservas_deportivas/public/`.

**Importante:** el proyecto contiene una base funcional, pero antes de entregarlo como aplicación terminada debes probarlo en tu entorno. El correo depende de la configuración del servidor, y el panel de administración puede ampliarse con edición y desactivación de instalaciones, modificación de horarios y gestión de usuarios. No lo publiques en producción sin HTTPS y las comprobaciones de seguridad correspondientes.

Mi recomendación para tu proyecto de 2.º DAW es añadir después un diagrama entidad-relación, un diagrama de casos de uso y pruebas de los casos de reserva duplicada, correo sin verificar y código 2FA caducado. Así podrás justificar tanto el diseño como las decisiones de seguridad.
