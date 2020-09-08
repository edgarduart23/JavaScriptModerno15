const producto = 'Monitor 20 pulgadas';

// .replace para reemplazar
console.log(producto);
console.log(producto.replace('Pulgadas','"' ));
console.log(producto.replace('Monitor', 'Monitor Curvo'));


// .slice para cortar
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
// no hace nada
console.log(producto.slice(2,1));

// Alternativa a slice
console.log(producto.substring(0,10));
// en cambio aca modifica el orden para realizar el corte
console.log(producto.substring(2,1));

console.log(usuario.charAt(0));

