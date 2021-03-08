let miNumero = '18';



//console.log(typeof miNumero);

let edad = Number(miNumero);
console.log( edad);

if(isNaN(edad)) {
    console.log('no es un numero');
}
else {
    if (edad >= 18) {
        console.log('La persona puede votar');
    }
    else {
        console.log('Muy joven para votar');
    }
   }

   if(isNaN(edad)) {
    console.log('no es un numero');
}
else{
    let resultado = (edad >= 18 ) ? 'puede votar' : 'muy joven para votar';
console.log(resultado);
}


if (edad >= 18) {
    console.log('La persona puede votar');
}
else {
    console.log('Muy joven para votar');
}


// verificar que una variable sea numero