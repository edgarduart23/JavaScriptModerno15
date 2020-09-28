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

const producto4 = {
    nombre: 'Celular 2',
    precio: 100
}
// .unshift agrega al comienzo de un arreglo
carrito.unshift(producto3);

// .push agrega al final de un arreglo
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);
console.table(carrito)

// Eliminar Último elemento de un arreglo
//carrito.pop();
//console.table(carrito);

//Eliminar del inicio del arreglo
//carrito.shift();
//console.table(carrito);

//Eliminar en cualquier momento
carrito.splice(1, 1);
console.table(carrito);


