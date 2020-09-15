const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,

}
const nombre = producto.nombre;
console.log(nombre);
console.log(producto.nombre);


// Destructuring
const {nombre} = producto;
console.log(nombre);

const {precio} = producto;
console.log(precio);

const {nombre, precio, disponible} = producto;

