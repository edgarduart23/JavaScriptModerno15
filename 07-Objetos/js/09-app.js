
"use strict"


const producto = {


    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}
// sellar el objecto no se pueden agregar ni eliminar propiedades pero si modificar
Object.seal(producto);


producto.disponible = false;
//producto.imagen ="imagen.jpg"

console.log(producto);
console.log(Object.isSealed(producto));
