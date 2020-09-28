const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,

}


// Destructuring
const {nombre} = producto;
console.log(nombre);

// Destructuring con Arreglos
const numeros = [10,20,30,40,50];

const [primero, segundo, tercero] = numeros;
const [, , tercero] = numeros;
const [primero, segundo, ...tercero] = numeros;
console.log(primero);
console.log(tercer);