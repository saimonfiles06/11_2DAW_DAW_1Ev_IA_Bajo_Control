# Respuesta prompt débil

Voy a crear un esquema SQL (compatible con SQLite) para una tienda, con datos de ejemplo, y lo pruebo para comprobar que funciona.

Ya tienes la base de datos de la tienda, probada y con datos de ejemplo. Te envío `tienda.sql` (el script) y `tienda.db` (la base de datos SQLite ya creada).

**Qué incluye**

- **Tablas:** `categorias`, `proveedores`, `productos`, `clientes`, `pedidos`, `lineas_pedido`, `pagos` y `movimientos_stock`, con claves foráneas, restricciones (precios y stock no negativos, estados de pedido válidos) e índices.
- **Vistas:** `v_total_pedidos` (importe total de cada pedido) y `v_stock_bajo` (productos por debajo de su stock mínimo).
- **Trigger:** al añadir una línea a un pedido se descuenta el stock y se registra el movimiento.
- **Datos de ejemplo:** 5 productos, 3 clientes, 3 pedidos y 2 pagos. Las vistas devuelven resultados correctos con ellos.

Lo asumí SQLite porque no indicaste motor. Si prefieres MySQL o PostgreSQL, o un Excel, dímelo y lo adapto. También puedo ajustarlo a tu tipo de tienda, por ejemplo con tallas y variantes, cupones, facturas o IVA.

# Respuesta prompr fuerte

Voy a crear el documento de diseño (modelo, relaciones, normalización) y el script MySQL 8 con datos de prueba, y lo compruebo antes de entregarlo.

Esquema del documento listo; ahora redacto el caso de negocio.

Documento abierto; relleno el caso de negocio.

Sigo con el modelo conceptual (entidades y relaciones).

Ahora escribo el script MySQL completo.

No hay servidor MySQL disponible en el entorno, así que valido la sintaxis con un analizador de MySQL y ejecuto la lógica (restricciones, claves y consultas) en una copia traducida a SQLite.

Script comprobado; estoy rellenando el diccionario de datos del documento.

Sigo con la implementación de las relaciones.

Ahora la normalización y las anomalías evitadas.

Añado el diagrama entidad-relación a la sección 2.

Compruebo cómo se ve el diagrama.

El diagrama se ve bien. Dejo el comentario de confirmación en el documento y entrego el script.

Tienes el documento de diseño (caso de negocio, modelo con diagrama, diccionario de datos, relaciones, normalización a 3FN) y el script `tienda_videojuegos.sql`, que crea las tablas, carga los datos de prueba y trae las consultas Q1 a Q6. Puedes editar el documento directamente o comentarlo.

**No he podido ejecutar el script en MySQL 8**, porque este entorno no tiene servidor. Lo probé en una copia traducida a SQLite. Comprobé que las consultas devuelven lo esperado, que se rechazan 15 casos que violan las restricciones y que los `ON DELETE` y `ON UPDATE` actúan como se describe. Antes de entregarlo, lánzalo en MySQL 8.0.16 o superior (`mysql -u root -p < tienda_videojuegos.sql`) y dime si falla algo.

El diseño tiene una redundancia deliberada: `pedidos` guarda `id_cliente` además de la dirección de envío, lo que rompe la 3FN estricta. Lo he mantenido porque la clave foránea compuesta impide enviar un pedido a la dirección de otro cliente. El documento lo explica y tiene un comentario para que me digas si prefieres quitarlo.
