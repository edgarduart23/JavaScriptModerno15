const producto = 'Monitor de 20 pulgadas';

// .repeat te va a permitir una cadena de texto..
// si paso un numero que es decimal se redondea
const texto = 'en promoción'.repeat(2);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// split, dividir un string

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));
const hobbies = 'leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(","));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split('#'));