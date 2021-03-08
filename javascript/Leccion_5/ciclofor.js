// ciclos For

//uso de la plabra continue
// uso de etiquetas
inicio:
for (let contador = 0; contador <= 10; contador++) {
    if ( contador % 2 !== 0) {
        continue inicio; //ir a la siguiente iteracion
        console.log(contador);
    }
        console.log(contador);
}

console.log('ya termino');







/*

// uso de la palabra BREAK
for (let contador = 0; contador <= 10; contador++) {
    if (contador % 2 == 0) {
        console.log(contador);
        break;
    }
    console.log(contador);
}

console.log('fin del ciblo for');






/*
for (let contador = 0; contador < 3 ; contador++) {
    console.log(contador);
}

console.log('fin del ciclo for');


*/