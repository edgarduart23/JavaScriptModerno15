const autenticado = true ;

if(autenticado === true){
    console.log('si puede ver netflix')
} else {
    console.log('No no puedes verlo')
}

// Forma Correcta
if(autenticado){
    console.log('si puede ver netflix')
} else {
    console.log('No no puedes verlo')
}

// Operador ternario
console.log(autenticado ? 'si esta autenticado' : 'no esta autenticado');
   