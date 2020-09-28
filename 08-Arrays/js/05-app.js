
// forma imperativa
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Abril', 'Mayo'];


//Agregar al final del arreglo
meses.push('Abril');
meses.push('Mayo');


console.table(meses);

const carrito = [];

//definir un producto
const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}
const producto2 = {
    nombre: 'Celular',
    precio: 800
}
const producto3 = {
    nombre: 'Teclado',
    precio: 50
}
// .unshift agrega al comienzo de un arreglo
carrito.unshift(producto3);

// .push agrega al final de un arreglo
carrito.push(producto);
carrito.push(producto2);
console.table(carrito)