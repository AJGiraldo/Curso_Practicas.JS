//Operadores logicos

//operador ternario

let resultado = (3>2) ? 'verdadero' : 'falso';

console.log(resultado);

let resultado1 = (1>2) ? 'verdadero' : 0;

console.log(resultado1);

let numero = 90;
resultado = (numero % 2 == 0 ) ? 'Numero Par' : 'Numero impar';
console.log(resultado);






/*
/ operadores logicos
// org = || si cualquiera es verdadero se ejecuta
//  vamos ha preguntar si el padre puede ir ha ver el juego del hijo
// puede siempre que este de vacaciones o tenga un dia de desacnso

let vacaciones = false, diaDescanso = true;
if (vacaciones || diaDescanso) {
    console.log('Padre puede asistir al juego de su hijo');
} else {
    console.log('El padre esta ocupado');
}


/*
// and = &&
let a = 5;
let valmin = 0; valmax = 10;

if (a >= valmin && a <= valmax ) {
    console.log('dentro de rango');
} else {
    console.log('fuera de rango');
}



<p></p>


/*
//ejercicio para saber si un numero es par o impar
// ejercicio para saber si alguien es mayor de edad

let edad = 20 , adulto = 18;

if (edad >= adulto) {
    console.log('Es un adulto');
} else {
    console.log('Es menos de edad');
}






let m = 1;

if (m % 2 == 0) {
    console.log('Es un numero par');
}
else{
    console.log('El numero es impar');
}
*/