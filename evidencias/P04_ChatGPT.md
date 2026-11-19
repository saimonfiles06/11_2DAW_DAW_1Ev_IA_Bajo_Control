# Respuesta prompt débil

Te voy a preparar una base de datos para una tienda que permita gestionar **productos, categorías, proveedores, clientes, ventas y stock**. Te servirá como punto de partida para una tienda de ropa, alimentación, tecnología o un comercio general.

La diseñaré en SQL para que puedas utilizarla en MySQL o adaptarla a otros sistemas de bases de datos.

## **1. Estructura de la base de datos**

**PRODUCTOS**

ID · Nombre · Precio · Stock · Categoría · Proveedor

**CLIENTES**

ID · Nombre · Teléfono · Email

**PROVEEDORES**

ID · Empresa · Contacto

**VENTAS**

ID · Fecha · Cliente · Total

**DETALLE DE VENTA**

Venta · Producto · Cantidad · Precio

## **2. Código SQL para crear la base de datos**

Este ejemplo utiliza MySQL. Puedes copiarlo y ejecutarlo en MySQL Workbench o phpMyAdmin.

```

CREATE DATABASE tienda;
USE tienda;

-- 1. Categorías
CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- 2. Proveedores
CREATE TABLE proveedores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    telefono VARCHAR(20),
    email VARCHAR(150)
);

-- 3. Productos
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    categoria_id INT,
    proveedor_id INT,
    FOREIGN KEY (categoria_id)
        REFERENCES categorias(id),
    FOREIGN KEY (proveedor_id)
        REFERENCES proveedores(id),
    CHECK (precio >= 0),
    CHECK (stock >= 0)
);

-- 4. Clientes
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    telefono VARCHAR(20),
    email VARCHAR(150),
    direccion VARCHAR(255)
);

-- 5. Ventas
CREATE TABLE ventas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    cliente_id INT,
    total DECIMAL(10,2) NOT NULL DEFAULT 0,
    FOREIGN KEY (cliente_id)
        REFERENCES clientes(id)
        ON DELETE SET NULL
);

-- 6. Detalles de cada venta
CREATE TABLE detalle_ventas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    venta_id INT NOT NULL,
    producto_id INT,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (venta_id)
        REFERENCES ventas(id)
        ON DELETE CASCADE,
    FOREIGN KEY (producto_id)
        REFERENCES productos(id)
        ON DELETE SET NULL,
    CHECK (cantidad > 0),
    CHECK (precio_unitario >= 0)
);

-- Datos de ejemplo
INSERT INTO categorias (nombre)
VALUES ('Alimentación'), ('Ropa'), ('Tecnología');

INSERT INTO proveedores (nombre, telefono, email)
VALUES ('Proveedor General', '600123456',
        'proveedor@ejemplo.com');

INSERT INTO productos
(nombre, descripcion, precio, stock,
 categoria_id, proveedor_id)
VALUES
('Camiseta', 'Camiseta básica', 15.99, 50, 2, 1),
('Auriculares', 'Auriculares inalámbricos',
 29.90, 20, 3, 1),
('Arroz', 'Paquete de arroz de 1 kg',
 1.80, 100, 1, 1);

INSERT INTO clientes (nombre, telefono, email)
VALUES ('Cliente de prueba', '611123456',
        'cliente@ejemplo.com');

-- Consultar todos los productos
SELECT * FROM productos;

-- Consultar productos con poco stock
SELECT nombre, stock
FROM productos
WHERE stock < 10;

-- Consultar productos con su categoría
SELECT p.nombre, p.precio, p.stock, c.nombre AS categoria
FROM productos p
LEFT JOIN categorias c ON p.categoria_id = c.id;

-- Consultar las ventas realizadas
SELECT * FROM ventas
ORDER BY fecha DESC;

```

## **3. ¿Qué podrás hacer con esta base de datos?**

- Registrar productos y sus precios.
- Controlar las existencias del almacén.
- Organizar productos por categorías.
- Guardar información de clientes y proveedores.
- Registrar ventas y los artículos de cada venta.
- Consultar qué productos quedan y revisar el historial de ventas.

**Importante:** este código crea la estructura y añade datos de ejemplo. Para registrar una venta completa también hay que calcular el total y actualizar el stock de forma controlada; conviene hacerlo mediante una transacción para evitar inconsistencias.

## **4. Personalicemos tu tienda**

¿Qué tipo de tienda tienes?

Tienda general

Tienda de ropa

Tienda de alimentación

Tienda de informática o tecnología

Tienda online

¿En qué formato la quieres?

MySQL (base de datos SQL)

Microsoft Access

Excel, con tablas para gestionar la tienda

Aplicación web con base de datos

¿Qué funciones necesitas?

Productos y stock

Ventas y caja

Clientes y proveedores

Facturas e informes

Usuarios y empleados

Crear mi base de datos personalizada

También puedo crear una imagen del diagrama de relaciones entre las tablas para que veas cómo se conecta toda la base de datos.

# Respuesta prompt fuerte

# **Diseño de base de datos relacional para una tienda de videojuegos**

## **1. Caso de negocio ficticio**

La empresa ficticia **PixelZone** es una tienda que vende videojuegos físicos a través de una aplicación web. Los clientes pueden consultar el catálogo, buscar videojuegos compatibles con distintas plataformas, realizar pedidos y revisar sus compras anteriores.

La base de datos se implementará en **MySQL 8.x**, con un diseño preparado para conectarse posteriormente a una aplicación web.

### **Requisitos funcionales**

- Gestionar clientes y sus datos de contacto.
- Mantener un catálogo de videojuegos con precio y existencias.
- Registrar las plataformas compatibles con cada videojuego.
- Gestionar pedidos y sus líneas de detalle.
- Conservar el precio aplicado en el momento de cada compra.
- Consultar el catálogo, las ventas y los productos más vendidos.

**Decisión de diseño:** se considera que la tienda vende videojuegos físicos. Un videojuego puede estar disponible para varias plataformas, y una plataforma puede tener muchos videojuegos. Cada línea de pedido identifica un videojuego concreto, independientemente de sus plataformas compatibles.

## **2. Modelo entidad-relación**

El modelo contiene cinco entidades principales y una entidad asociativa necesaria para resolver la relación muchos a muchos entre videojuegos y plataformas.

**CLIENTES**

PK id_cliente

**PEDIDOS**

PK id_pedido · FK id_cliente

**LINEAS_PEDIDO**

PK id_linea · FK id_pedido · FK id_videojuego

**VIDEOJUEGOS**

PK id_videojuego

**VIDEOJUEGO_PLATAFORMA**

PK compuesta · FK videojuego · FK plataforma

**PLATAFORMAS**

PK id_plataforma · nombre único

La entidad `videojuego_plataforma` es una tabla asociativa, no una entidad comercial independiente. Se necesita para representar correctamente las plataformas compatibles sin repetir los datos de los videojuegos.

## **3. Entidades, atributos y restricciones**

Los tipos monetarios utilizan `DECIMAL(10,2)` para evitar los errores de precisión asociados a `FLOAT` o `DOUBLE`. Las claves primarias usan `INT UNSIGNED AUTO_INCREMENT`.

### **3.1. Tabla&#x20;**`clientes`

| Atributo         | Tipo MySQL   | Restricciones                       |
| ---------------- | ------------ | ----------------------------------- |
| `id_cliente`     | INT UNSIGNED | PK, AUTO_INCREMENT                  |
| `nombre`         | VARCHAR(100) | NOT NULL                            |
| `apellidos`      | VARCHAR(150) | NOT NULL                            |
| `email`          | VARCHAR(254) | NOT NULL, UNIQUE                    |
| `telefono`       | VARCHAR(20)  | NULL                                |
| `fecha_registro` | DATETIME     | NOT NULL, DEFAULT CURRENT_TIMESTAMP |

Cada cliente puede realizar cero o muchos pedidos. Cada pedido pertenece a un único cliente.

El correo electrónico es único para evitar duplicidades de cuentas. El teléfono es opcional porque no todos los clientes tienen que facilitarlo.

### **3.2. Tabla&#x20;**`videojuegos`

| Atributo            | Tipo MySQL    | Restricciones               |
| ------------------- | ------------- | --------------------------- |
| `id_videojuego`     | INT UNSIGNED  | PK, AUTO_INCREMENT          |
| `titulo`            | VARCHAR(200)  | NOT NULL                    |
| `genero`            | VARCHAR(60)   | NOT NULL                    |
| `fecha_lanzamiento` | DATE          | NULL                        |
| `precio`            | DECIMAL(10,2) | NOT NULL, CHECK precio >= 0 |
| `stock`             | INT UNSIGNED  | NOT NULL, DEFAULT 0         |
| `activo`            | BOOLEAN       | NOT NULL, DEFAULT TRUE      |

Cada registro representa un videojuego del catálogo, con un precio de venta actual y existencias disponibles.

No se incluye `id_plataforma` directamente en esta tabla, ya que un mismo videojuego puede venderse para varias plataformas.

### **3.3. Tabla&#x20;**`plataformas`

| Atributo        | Tipo MySQL   | Restricciones      |
| --------------- | ------------ | ------------------ |
| `id_plataforma` | INT UNSIGNED | PK, AUTO_INCREMENT |
| `nombre`        | VARCHAR(80)  | NOT NULL, UNIQUE   |
| `fabricante`    | VARCHAR(100) | NULL               |

Permite registrar plataformas como PlayStation 5, Xbox Series X y Nintendo Switch. La plataforma se almacena una sola vez, aunque tenga muchos videojuegos asociados.

### **3.4. Tabla&#x20;**`videojuego_plataforma`

| Atributo        | Tipo MySQL   | Restricciones    |
| --------------- | ------------ | ---------------- |
| `id_videojuego` | INT UNSIGNED | PK compuesta, FK |
| `id_plataforma` | INT UNSIGNED | PK compuesta, FK |

Es la tabla asociativa que resuelve la relación N:M entre videojuegos y plataformas. Su clave primaria compuesta impide asociar dos veces el mismo videojuego con la misma plataforma.

### **3.5. Tabla&#x20;**`pedidos`

| Atributo       | Tipo MySQL   | Restricciones                        |
| -------------- | ------------ | ------------------------------------ |
| `id_pedido`    | INT UNSIGNED | PK, AUTO_INCREMENT                   |
| `id_cliente`   | INT UNSIGNED | FK, NOT NULL                         |
| `fecha_pedido` | DATETIME     | NOT NULL, DEFAULT CURRENT_TIMESTAMP  |
| `estado`       | VARCHAR(20)  | NOT NULL, DEFAULT 'pendiente', CHECK |

Estados permitidos: `pendiente`, `pagado`, `enviado`, `entregado` y `cancelado`.

El importe total **no se almacena en esta tabla**. Se calcula a partir de las líneas del pedido para evitar que un total guardado se quede desactualizado cuando cambie algún detalle.

### **3.6. Tabla&#x20;**`lineas_pedido`

| Atributo          | Tipo MySQL    | Restricciones                        |
| ----------------- | ------------- | ------------------------------------ |
| `id_linea`        | INT UNSIGNED  | PK, AUTO_INCREMENT                   |
| `id_pedido`       | INT UNSIGNED  | FK, NOT NULL                         |
| `id_videojuego`   | INT UNSIGNED  | FK, NOT NULL                         |
| `cantidad`        | INT UNSIGNED  | NOT NULL, CHECK cantidad > 0         |
| `precio_unitario` | DECIMAL(10,2) | NOT NULL, CHECK precio_unitario >= 0 |

`precio_unitario` representa el precio del videojuego en el momento de la compra, no necesariamente el precio actual del catálogo. Así se conserva el historial correcto aunque cambien los precios.

Se añade una restricción `UNIQUE (id_pedido, id_videojuego)` para que cada videojuego aparezca una sola vez por pedido. Si el cliente compra varias unidades, se registra la cantidad en una única línea.

## **4. Relaciones y cardinalidades**

| Relación                     | Cardinalidad | Implementación                   |
| ---------------------------- | ------------ | -------------------------------- |
| Cliente — Pedido             | 1:N          | FK `pedidos.id_cliente`          |
| Pedido — Línea de pedido     | 1:N          | FK `lineas_pedido.id_pedido`     |
| Videojuego — Línea de pedido | 1:N          | FK `lineas_pedido.id_videojuego` |
| Videojuego — Plataforma      | N:M          | Tabla `videojuego_plataforma`    |
| Plataforma — Videojuego      | N:M          | Tabla `videojuego_plataforma`    |

Un cliente puede tener varios pedidos, pero cada pedido corresponde a un solo cliente. Cada pedido contiene una o varias líneas cuando se ha registrado una compra con productos. Cada línea hace referencia a un único videojuego.

En la relación N:M, la tabla asociativa transforma una relación que no se puede implementar directamente mediante dos claves foráneas en dos relaciones 1:N.

## **5. Normalización hasta tercera forma normal (3FN)**

El diseño aplica las tres primeras formas normales:

- **Primera forma normal (1FN):** cada campo contiene un valor atómico. No se guardan listas de plataformas en una columna ni varios videojuegos en una misma línea de pedido.
- **Segunda forma normal (2FN):** todos los atributos de la tabla asociativa dependen de la clave compuesta completa. La tabla solo contiene las dos claves foráneas, que forman su clave primaria.
- **Tercera forma normal (3FN):** los atributos no clave dependen de la clave primaria, de toda ella y de nada más que ella. Los datos de clientes, plataformas, videojuegos y pedidos se almacenan en sus propias tablas.

### **Cómo evita redundancias y anomalías**

- **Inserción:** se puede registrar una plataforma antes de asociarle videojuegos, o un cliente antes de realizar un pedido.
- **Modificación:** el nombre de una plataforma se modifica en un único registro y no en cada videojuego.
- **Eliminación:** borrar una asociación de plataforma no elimina el videojuego ni las ventas históricas. Las líneas de pedido conservan el precio de la compra.
- **Historial comercial:** el precio actual se almacena en `videojuegos.precio`; el precio histórico, en `lineas_pedido.precio_unitario`. No son datos redundantes, ya que representan momentos distintos.

## **6. Script MySQL 8.x completo**

El siguiente script crea la base de datos desde cero, define las restricciones, introduce datos ficticios y deja preparada la estructura para las consultas posteriores.

> Está pensado para ejecutarse en una instancia de pruebas. Elimina la base de datos `pixelzone` si ya existe, por lo que no debes ejecutarlo sobre una base de datos con información que quieras conservar.

```

-- =====================================================
-- PIXELZONE: TIENDA DE VIDEOJUEGOS
-- Compatible con MySQL 8.x (CHECK desde MySQL 8.0.16)
-- =====================================================

DROP DATABASE IF EXISTS pixelzone;

CREATE DATABASE pixelzone
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_0900_ai_ci;

USE pixelzone;

-- 1. CLIENTES
CREATE TABLE clientes (
    id_cliente INT UNSIGNED AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(150) NOT NULL,
    email VARCHAR(254) NOT NULL,
    telefono VARCHAR(20),
    fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT pk_clientes
        PRIMARY KEY (id_cliente),

    CONSTRAINT uq_clientes_email
        UNIQUE (email)
) ENGINE = InnoDB;

-- 2. PLATAFORMAS
CREATE TABLE plataformas (
    id_plataforma INT UNSIGNED AUTO_INCREMENT,
    nombre VARCHAR(80) NOT NULL,
    fabricante VARCHAR(100),

    CONSTRAINT pk_plataformas
        PRIMARY KEY (id_plataforma),

    CONSTRAINT uq_plataformas_nombre
        UNIQUE (nombre)
) ENGINE = InnoDB;

-- 3. VIDEOJUEGOS
CREATE TABLE videojuegos (
    id_videojuego INT UNSIGNED AUTO_INCREMENT,
    titulo VARCHAR(200) NOT NULL,
    genero VARCHAR(60) NOT NULL,
    fecha_lanzamiento DATE,
    precio DECIMAL(10,2) NOT NULL,
    stock INT UNSIGNED NOT NULL DEFAULT 0,
    activo BOOLEAN NOT NULL DEFAULT TRUE,

    CONSTRAINT pk_videojuegos
        PRIMARY KEY (id_videojuego),

    CONSTRAINT chk_videojuegos_precio
        CHECK (precio >= 0)
) ENGINE = InnoDB;

-- 4. RELACION VIDEOJUEGO - PLATAFORMA
CREATE TABLE videojuego_plataforma (
    id_videojuego INT UNSIGNED NOT NULL,
    id_plataforma INT UNSIGNED NOT NULL,

    CONSTRAINT pk_videojuego_plataforma
        PRIMARY KEY (id_videojuego, id_plataforma),

    CONSTRAINT fk_vp_videojuego
        FOREIGN KEY (id_videojuego)
        REFERENCES videojuegos (id_videojuego)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_vp_plataforma
        FOREIGN KEY (id_plataforma)
        REFERENCES plataformas (id_plataforma)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
) ENGINE = InnoDB;

-- 5. PEDIDOS
CREATE TABLE pedidos (
    id_pedido INT UNSIGNED AUTO_INCREMENT,
    id_cliente INT UNSIGNED NOT NULL,
    fecha_pedido DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(20) NOT NULL DEFAULT 'pendiente',

    CONSTRAINT pk_pedidos
        PRIMARY KEY (id_pedido),

    CONSTRAINT fk_pedidos_cliente
        FOREIGN KEY (id_cliente)
        REFERENCES clientes (id_cliente)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT chk_pedidos_estado
        CHECK (estado IN (
            'pendiente',
            'pagado',
            'enviado',
            'entregado',
            'cancelado'
        )),

    INDEX idx_pedidos_cliente_fecha
        (id_cliente, fecha_pedido)
) ENGINE = InnoDB;

-- 6. LINEAS DE PEDIDO
CREATE TABLE lineas_pedido (
    id_linea INT UNSIGNED AUTO_INCREMENT,
    id_pedido INT UNSIGNED NOT NULL,
    id_videojuego INT UNSIGNED NOT NULL,
    cantidad INT UNSIGNED NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,

    CONSTRAINT pk_lineas_pedido
        PRIMARY KEY (id_linea),

    CONSTRAINT uq_linea_pedido_videojuego
        UNIQUE (id_pedido, id_videojuego),

    CONSTRAINT fk_lineas_pedido
        FOREIGN KEY (id_pedido)
        REFERENCES pedidos (id_pedido)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_lineas_videojuego
        FOREIGN KEY (id_videojuego)
        REFERENCES videojuegos (id_videojuego)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT chk_lineas_cantidad
        CHECK (cantidad > 0),

    CONSTRAINT chk_lineas_precio
        CHECK (precio_unitario >= 0),

    INDEX idx_lineas_videojuego (id_videojuego)
) ENGINE = InnoDB;

-- =====================================================
-- DATOS FICTICIOS
-- =====================================================

-- Clientes
INSERT INTO clientes
    (nombre, apellidos, email, telefono)
VALUES
    ('Laura', 'García López', 'laura@example.com', '600111222'),
    ('Carlos', 'Martínez Ruiz', 'carlos@example.com', '600222333'),
    ('Marta', 'Sánchez Pérez', 'marta@example.com', '600333444'),
    ('Diego', 'Fernández Gil', 'diego@example.com', NULL);

-- Plataformas
INSERT INTO plataformas (nombre, fabricante)
VALUES
    ('PlayStation 5', 'Sony'),
    ('Xbox Series X', 'Microsoft'),
    ('Nintendo Switch', 'Nintendo'),
    ('PC', 'Varios fabricantes');

-- Videojuegos
INSERT INTO videojuegos
    (titulo, genero, fecha_lanzamiento, precio, stock, activo)
VALUES
    ('Elden Ring', 'RPG', '2022-02-25', 49.99, 20, TRUE),
    ('EA Sports FC 26', 'Deportes', '2025-09-26', 69.99, 30, TRUE),
    ('The Legend of Zelda: Tears of the Kingdom',
        'Aventura', '2023-05-12', 59.99, 15, TRUE),
    ('Minecraft', 'Sandbox', '2011-11-18', 29.99, 40, TRUE),
    ('Cyberpunk 2077', 'RPG', '2020-12-10', 39.99, 12, TRUE),
    ('Hades', 'Acción', '2020-09-17', 24.99, 18, TRUE),
    ('Juego descatalogado de prueba',
        'Acción', NULL, 9.99, 0, FALSE);

-- Compatibilidad con plataformas
INSERT INTO videojuego_plataforma
    (id_videojuego, id_plataforma)
VALUES
    (1, 1), (1, 2), (1, 4),
    (2, 1), (2, 2), (2, 3),
    (3, 3),
    (4, 1), (4, 2), (4, 3), (4, 4),
    (5, 1), (5, 2), (5, 4),
    (6, 1), (6, 2), (6, 3), (6, 4),
    (7, 4);

-- Pedidos
INSERT INTO pedidos (id_cliente, fecha_pedido, estado)
VALUES
    (1, '2026-10-01 10:30:00', 'entregado'),
    (1, '2026-10-10 17:45:00', 'pagado'),
    (2, '2026-10-11 12:15:00', 'enviado'),
    (3, '2026-10-12 16:00:00', 'pendiente'),
    (2, '2026-10-13 09:20:00', 'cancelado');

-- Líneas de pedido
-- El precio unitario es el precio histórico de compra.
INSERT INTO lineas_pedido
    (id_pedido, id_videojuego, cantidad, precio_unitario)
VALUES
    (1, 1, 1, 49.99),
    (1, 3, 1, 59.99),
    (1, 4, 2, 29.99),
    (2, 2, 1, 69.99),
    (2, 6, 2, 24.99),
    (3, 1, 1, 49.99),
    (3, 5, 1, 39.99),
    (4, 4, 1, 29.99),
    (5, 2, 1, 69.99);

```

### **Justificación de las acciones referenciales**

- `ON DELETE RESTRICT` en cliente → pedido: impide eliminar un cliente que tenga pedidos, protegiendo el historial.
- `ON DELETE CASCADE` en pedido → líneas: las líneas dependen del pedido. Si este se elimina físicamente, sus líneas no quedan huérfanas. En producción conviene evitar eliminar pedidos comerciales y conservarlos mediante estados.
- `ON DELETE RESTRICT` en videojuego → líneas: impide borrar videojuegos que figuren en ventas históricas.
- `ON DELETE CASCADE` en videojuego → asociación de plataformas: al eliminar un videojuego sin ventas históricas, se eliminan sus asociaciones.
- `ON DELETE RESTRICT` en plataforma → asociación: impide borrar una plataforma que todavía tenga videojuegos asociados.
- `ON UPDATE CASCADE`: propaga cambios en claves referenciadas, aunque las claves primarias autogeneradas normalmente no deberían modificarse.
- `NOT NULL`, `UNIQUE`, `DEFAULT` y `CHECK`: aseguran campos obligatorios, evitan duplicidades, proporcionan valores iniciales y validan cantidades, precios y estados.

## **7. Consultas SQL de comprobación**

Estas consultas permiten verificar las relaciones y obtener los principales datos que necesitaría la aplicación web.

### **7.1. Consultar el catálogo de videojuegos**

Muestra los videojuegos activos, su precio, las existencias y sus géneros.

```
SELECT
    id_videojuego,
    titulo,
    genero,
    fecha_lanzamiento,
    precio,
    stock
FROM videojuegos
WHERE activo = TRUE
ORDER BY titulo;
```

### **7.2. Consultar videojuegos disponibles para una plataforma**

Por ejemplo, todos los videojuegos activos para Nintendo Switch.

```
SELECT
    v.id_videojuego,
    v.titulo,
    v.genero,
    v.precio,
    v.stock,
    p.nombre AS plataforma
FROM videojuegos v
INNER JOIN videojuego_plataforma vp
    ON v.id_videojuego = vp.id_videojuego
INNER JOIN plataformas p
    ON vp.id_plataforma = p.id_plataforma
WHERE p.nombre = 'Nintendo Switch'
  AND v.activo = TRUE
ORDER BY v.titulo;
```

La consulta realiza dos `JOIN`: uno para relacionar los videojuegos con la tabla asociativa y otro para recuperar el nombre de la plataforma.

### **7.3. Consultar los pedidos de un cliente**

Muestra los pedidos de Laura García López, incluidos su fecha y estado.

```
SELECT
    pe.id_pedido,
    pe.fecha_pedido,
    pe.estado,
    c.nombre,
    c.apellidos
FROM pedidos pe
INNER JOIN clientes c
    ON pe.id_cliente = c.id_cliente
WHERE c.email = 'laura@example.com'
ORDER BY pe.fecha_pedido DESC;
```

En una aplicación web, la identificación del cliente debería proceder de la sesión autenticada, no de un correo enviado libremente por el navegador.

### **7.4. Consultar el contenido de un pedido**

Muestra los videojuegos, las cantidades, los precios históricos y los subtotales del pedido número 1.

```
SELECT
    lp.id_pedido,
    v.titulo,
    lp.cantidad,
    lp.precio_unitario,
    lp.cantidad * lp.precio_unitario AS subtotal
FROM lineas_pedido lp
INNER JOIN videojuegos v
    ON lp.id_videojuego = v.id_videojuego
WHERE lp.id_pedido = 1;
```

### **7.5. Calcular el total de un pedido**

El total se obtiene sumando el subtotal de cada línea. Se utiliza `COALESCE` para devolver cero si el pedido no tiene líneas.

```
SELECT
    pe.id_pedido,
    pe.estado,
    COALESCE(
        SUM(lp.cantidad * lp.precio_unitario),
        0.00
    ) AS total_pedido
FROM pedidos pe
LEFT JOIN lineas_pedido lp
    ON pe.id_pedido = lp.id_pedido
WHERE pe.id_pedido = 1
GROUP BY pe.id_pedido, pe.estado;
```

Con los datos de prueba, el pedido 1 tiene un total de **169,96 €**:

- Elden Ring: 49,99 €
- The Legend of Zelda: Tears of the Kingdom: 59,99 €
- Minecraft: 2 × 29,99 € = 59,98 €

### **7.6. Obtener los videojuegos más vendidos**

Esta consulta cuenta las unidades de pedidos pagados, enviados o entregados. Excluye los pedidos pendientes y cancelados.

```
SELECT
    v.id_videojuego,
    v.titulo,
    SUM(lp.cantidad) AS unidades_vendidas,
    SUM(lp.cantidad * lp.precio_unitario) AS importe_vendido
FROM lineas_pedido lp
INNER JOIN pedidos pe
    ON lp.id_pedido = pe.id_pedido
INNER JOIN videojuegos v
    ON lp.id_videojuego = v.id_videojuego
WHERE pe.estado IN ('pagado', 'enviado', 'entregado')
GROUP BY v.id_videojuego, v.titulo
ORDER BY unidades_vendidas DESC, v.titulo
LIMIT 10;
```

El resultado permite identificar los productos más vendidos por unidades y comparar también el importe asociado a las ventas confirmadas.

### **7.7. Comprobar las relaciones y la integridad de los datos**

Para revisar las plataformas registradas y sus videojuegos:

```
SELECT
    p.nombre AS plataforma,
    COUNT(vp.id_videojuego) AS numero_videojuegos
FROM plataformas p
LEFT JOIN videojuego_plataforma vp
    ON p.id_plataforma = vp.id_plataforma
GROUP BY p.id_plataforma, p.nombre
ORDER BY p.nombre;
```

Para comprobar los pedidos que todavía no tienen líneas:

```
SELECT pe.id_pedido, pe.fecha_pedido, pe.estado
FROM pedidos pe
LEFT JOIN lineas_pedido lp
    ON pe.id_pedido = lp.id_pedido
WHERE lp.id_linea IS NULL;
```

Esta última consulta puede detectar pedidos incompletos durante las pruebas. En una aplicación real, la creación del pedido y sus líneas debería ejecutarse dentro de una transacción.

## **8. Recomendaciones para su futura aplicación web**

El diseño constituye una base relacional funcional, pero una aplicación comercial debería incorporar algunas medidas adicionales:

1. **Transacciones:** registrar el pedido, comprobar el stock y descontar las existencias de manera atómica.
2. **Seguridad:** utilizar consultas preparadas, contraseñas almacenadas mediante hash en la capa de autenticación y permisos de base de datos limitados.
3. **Gestión de stock:** impedir que dos compras concurrentes vendan las mismas unidades disponibles.
4. **Historial comercial:** no eliminar pedidos pagados ni modificar sus precios históricos.
5. **Pagos:** incorporar una tabla de pagos si se necesita gestionar autorizaciones, reembolsos y estados de cobro.
6. **Direcciones de envío:** añadir una entidad de direcciones o una copia de la dirección de entrega dentro del pedido si se necesita conservar el destino histórico.
7. **Migraciones y copias de seguridad:** gestionar los cambios de esquema mediante migraciones versionadas y mantener copias de seguridad verificadas.

## **9. Resumen de la solución**

| Criterio                   | Solución                                             |
| -------------------------- | ---------------------------------------------------- |
| Motor                      | MySQL 8.x / InnoDB                                   |
| Entidades principales      | 5                                                    |
| Tabla asociativa adicional | 1                                                    |
| Relaciones N:M             | Videojuegos–plataformas                              |
| Integridad referencial     | PK, FK y acciones referenciales                      |
| Validaciones               | NOT NULL, UNIQUE, DEFAULT y CHECK                    |
| Normalización              | Hasta 3FN                                            |
| Datos de prueba            | Clientes, videojuegos, plataformas, pedidos y líneas |
| Consultas solicitadas      | 7 consultas de ejemplo                               |
| Preparación para web       | Estructura relacional apta para una API              |

**Conclusión:** la base de datos evita duplicar la información de clientes, videojuegos y plataformas, conserva el precio histórico de cada compra y mantiene las relaciones comerciales mediante claves foráneas. El siguiente paso sería implementar la lógica transaccional de compra y la API que permita a la aplicación web operar sobre este esquema de forma segura.
