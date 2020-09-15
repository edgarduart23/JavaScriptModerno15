const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}


const nombreProducto = 'Monitor';
nombreProducto = 'tele';


producto.disponible = false;
delete producto.precio;
console.log(producto);