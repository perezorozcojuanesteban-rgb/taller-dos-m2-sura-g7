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

    return punto * 2
})

//  Muestra `puntos` y `puntosDoble` para verificar que el original no cambió.

console.log(puntos);
console.log(puntosDoble);