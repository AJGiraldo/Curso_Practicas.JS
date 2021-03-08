let condicion = false;

//podemos no usar llaves {} si solo tiene una linea de codigo el if
if (2>3) {
    console.log('condicion verdadres');
} else {
    console.log('condicion falsa');
}

//Ejercicio de if/else en javascript
/*
6a-11am - Buenos dias
12pm-17pm - Buenas tardes
18pm-23pm Buenas noches
0am-6am - Durmiendo
*/
// mandar mensaje dependiendo de la hora del dia

let hDia = (18);
let mensaje;

if (hDia == 6 || hDia == 7 || hDia == 8 || hDia == 9 || hDia == 10 || hDia == 11) {
    mensaje = 'Buenos Dias'
}
else if(hDia == 12 || hDia == 13 || hDia == 14 || hDia == 15 || hDia == 16 || hDia == 17){
    mensaje = 'Buenas Tardes'
}
else if(hDia >= 18 && hDia <= 23){
    mensaje = 'Buenas Noches'
}
else {
    mensaje = 'Durmiendo, no te podemos atender en este momento'
}
console.log(mensaje);














/*

let mes = 12;
let estacion;

if (mes == 1 || mes == 2 || mes == 12){
    estacion = 'invierno';
}
else if(mes == 3 || mes == 4 || mes == 5){
    estacion = 'primavera';
}
else if(mes == 6 || mes == 7 || mes == 8){
    estacion = 'verano';
}
else if( mes == 9 || mes == 10 || mes == 11){
    estacion = 'otoño';
}
else {
    estacion = 'valor incorrrecto';
};
console.log(estacion);





















/*
let numero = 33;

if (numero == 1) {
    console.log('Numero uno');
}
else if(numero == 2) {
    console.log('numero dos');
}
else if (numero == 3) {
    console.log('numero tres');
}
else if (numero == 4) {
    console.log('numero cuatro');
}
else{
    console.log('numero desconocido');
}
*/