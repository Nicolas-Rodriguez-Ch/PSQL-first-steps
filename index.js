// Crea una tabla llamada "Productos" que tenga las siguientes columnas:

// "Nombre":"VARCHAR" de longitud máxima 50

// "Descripción": "TEXT"

// "Precio": "DECIMAL(10,2)"

// "Fecha de lanzamiento": "DATE"

// "Cantidad en inventario": "INT"

// Respuesta 
// -- Table: public.productos

// -- DROP TABLE IF EXISTS public.productos;

// CREATE TABLE IF NOT EXISTS public.productos
// (
//     "Nombre" character(50) COLLATE pg_catalog."default",
//     "Descripcion" text COLLATE pg_catalog."default",
//     precio numeric(10,2),
//     "Fecha de Lanzamiento" date,
//     "Cantidad en inventario" integer
// )

// TABLESPACE pg_default;

// ALTER TABLE IF EXISTS public.productos
//     OWNER to postgres;


// Realiza una consulta que seleccione todas las columnas de la tabla "Productos" y muestra los resultados.

// Respuesta

// SELECT "Nombre", "Descripcion", precio, "Fecha de Lanzamiento", "Cantidad en inventario"
// 	FROM public.productos;

// Realiza una consulta que seleccione solo la columna "Nombre" y "Precio" de la tabla "Productos" y muestra los resultados.

// SELECT "Nombre", precio
// FROM public.productos;

// Realiza una consulta que seleccione solo los productos que tienen un precio mayor a $50.

// Respuesta 

// SELECT *
// FROM public.productos
// WHERE precio > 50;

// Realiza una consulta que seleccione solo los productos que tienen una cantidad en inventario menor a 10.
//Respuesta

// SELECT *
// 	FROM public.productos
// 	WHERE "Cantidad en inventario" < 10

// Realiza una consulta que seleccione solo los productos que fueron lanzados en o después del 1 de enero de 2023.

//Respuesta
// SELECT *
// FROM public.productos
// WHERE "Fecha de Lanzamiento" > '2023-01-01';

//Modifica la tabla "Productos" para cambiar el tipo de datos de la columna "Cantidad en inventario" a "FLOAT".

// Respuesta
// ALTER TABLE public.productos
// ALTER COLUMN "Cantidad en inventario" TYPE FLOAT;

// Elimina la tabla "Productos" de la base de datos.

// Respuesta
// DROP TABLE public.productos;
