/*  ## Ejercicio 1: Duplicar Números (map)
Inicias con una lista de puntos:
`let puntos = [10, 20, 30, 40];`

Tareas:
1.  Crea un nuevo arreglo `puntosDoble` donde cada valor sea el doble del arreglo original.
2.  Muestra `puntos` y `puntosDoble` para verificar que el original no cambió.

---
   */

let puntos = [10, 20, 30, 40];

// Crea un nuevo arreglo `puntosDoble` donde cada valor sea el doble del arreglo original.

let puntosDoble = puntos.map(function(punto) {
    return punto * 2;
});

//  Muestra `puntos` y `puntosDoble` para verificar que el original no cambió.

console.log(puntos);
console.log(puntosDoble);

/* 
 ## Ejercicio 2: Lista de Nombres (map con objetos)
Inicias con una lista de usuarios:
`let usuarios = [{id: 1, nombre: "Ana"}, {id: 2, nombre: "Luis"}, {id: 3, nombre: "Carlos"}];`

Tareas:
1.  Crea un nuevo arreglo `nombres` que contenga solo los nombres de los usuarios (ej: `["Ana", "Luis", "Carlos"]`).

--- 
 */

let usuarios = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Luis" },
    { id: 3, nombre: "Carlos" },
];

// Crea un nuevo arreglo `nombres` que contenga solo los nombres de los usuarios (ej: `["Ana", "Luis", "Carlos"]`).

let nombres = usuarios.map((usuario) => {
    return usuario.nombre;
});

console.log(usuarios);
console.log(nombres);

/*   ## Ejercicio 3: Notas Aprobadas (filter)
Inicias con una lista de calificaciones:
`let notas = [8, 5, 10, 3, 7];`

Tareas:
1.  Crea un nuevo arreglo `aprobadas` que contenga solo las notas que sean mayores o iguales a 6.

---
  */

let notas = [8, 5, 10, 3, 7];

// Crea un nuevo arreglo `aprobadas` que contenga solo las notas que sean mayores o iguales a 6.

let aprobadas = notas.filter((nota) => nota >= 6);

console.log(notas);
console.log(aprobadas);

/*  ## Ejercicio 4: Productos en Stock (filter con objetos)
Inicias con un inventario:
`let productos = [{nombre: "Camisa", stock: 10}, {nombre: "Zapatos", stock: 0}, {nombre: "Pantalón", stock: 5}];`

Tareas:
1.  Crea un nuevo arreglo `enStock` que contenga solo los productos cuyo `stock` sea mayor que 0.

---
   */

let productos = [
    { nombre: "Camisa", stock: 10 },
    { nombre: "Zapatos", stock: 0 },
    { nombre: "Pantalón", stock: 5 },
];

// Crea un nuevo arreglo `enStock` que contenga solo los productos cuyo `stock` sea mayor que 0.

let enStock = productos.filter((productos) => productos.stock > 0);

console.log(productos);
console.log(enStock);

/*  ## Ejercicio 5: Suma Total de Ventas (reduce)
Inicias con una lista de ventas del día:
`let ventas = [150, 300, 100, 50];`

Tareas:
1.  Calcula el valor `totalVentas` sumando todos los elementos del arreglo usando `reduce`.

---

*/

let ventas = [150, 300, 100, 50];

// Calcula el valor `totalVentas` sumando todos los elementos del arreglo usando `reduce`.

let totalVentas = ventas.reduce((acumulador, venta) => {
    return acumulador + venta;
}, 0);

console.log(ventas);
console.log(totalVentas);

/*   ## Ejercicio 6: Aplanar un Arreglo (reduce)
Inicias con una lista de listas:
`let grupos = [["Ana", "Luis"], ["Maria", "Juan"], ["Pedro"]];`

Tareas:
1.  Crea un nuevo arreglo `listaPlana` que contenga todos los nombres en un solo nivel (ej: `["Ana", "Luis", "Maria", "Juan", "Pedro"]`). (Pista: `reduce` puede usar `concat`).

---   */

let grupos = [
    ["Ana", "Luis"],
    ["Maria", "Juan"],
    ["Pedro"]
];

// Crea un nuevo arreglo `listaPlana` que contenga todos los nombres en un solo nivel (ej: `["Ana", "Luis", "Maria", "Juan", "Pedro"]`). (Pista: `reduce` puede usar `concat`).

let listaPlana = grupos.reduce(function(acumulador, grupo) {
    return acumulador.concat(grupo);
}, []);

console.log(grupos);
console.log(listaPlana);

/*   ## Ejercicio 7: Crear una Copia (slice)
Inicias con un arreglo:
`let original = ["A", "B", "C"];`

Tareas:
1.  Crea un `clon` exacto del arreglo `original` usando `slice()`.
2.  (Verificación) Modifica el `clon` (ej. `clon.push("D")`) y demuestra que `original` sigue intacto.

---
   */

let original = ["A", "B", "C"];

// Crea un `clon` exacto del arreglo `original` usando `slice()`.

let clon = original.slice()

// (Verificación) Modifica el `clon` (ej. `clon.push("D")`) y demuestra que `original` sigue intacto.

clon.push("D")

console.log(original)
console.log(clon)

/*   ## Ejercicio 8: Obtener el Podio (slice)
Inicias con una lista de competidores:
`let competidores = ["Oro", "Plata", "Bronce", "Mención 1", "Mención 2"];`

Tareas:
1.  Crea un nuevo arreglo `podio` que contenga solo los primeros 3 elementos (Oro, Plata, Bronce).

---
   */

let competidores = ["Oro", "Plata", "Bronce", "Mención 1", "Mención 2"];

// Crea un nuevo arreglo `podio` que contenga solo los primeros 3 elementos (Oro, Plata, Bronce).

let podio = competidores.slice(0, 3)

console.log(competidores)
console.log(podio);

/*  ## Ejercicio 9: Unir Equipos (concat)
Inicias con dos listas:
`let equipoDev = ["Ana", "Juan"];`
`let equipoQA = ["Carlos", "Maria"];`

Tareas:
1.  Crea un nuevo arreglo `equipoCompleto` que sea la unión de `equipoDev` y `equipoQA`.

---   */

let equipoDev = ["Ana", "Juan"];

let equipoQA = ["Carlos", "Maria"];

// Crea un nuevo arreglo `equipoCompleto` que sea la unión de `equipoDev` y `equipoQA`.

let equipoCompleto = equipoDev.concat(equipoQA)

console.log(equipoCompleto);

/*   ## Ejercicio 10: Añadir al Carrito (concat - Inmutable)
Inicias con un carrito de compras:
`let carrito = ["Manzana"];`

Tareas:
1.  Crea un `nuevoCarrito` que contenga los elementos del `carrito` original más "Pera".
2.  Verifica que `carrito` original solo tiene "Manzana".

---
   */

let carrito = ["Manzana"];

// Crea un `nuevoCarrito` que contenga los elementos del `carrito` original más "Pera".

let nuevoCarrito = carrito.concat("Pera")

// Verifica que `carrito` original solo tiene "Manzana".

console.log(carrito);
console.log(nuevoCarrito);