
"use strict"


const producto = {


    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}
// para no podes modificar las propiedades
Object.freeze(producto);


producto.disponible = false;
producto.imagen ="imagen.jpg"
console.log(producto);

// Object method
console.log(Object.isFrozen(producto));