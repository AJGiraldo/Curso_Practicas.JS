// sentencia switch
// Ejercicio de estaciones del año

let mes = 1;
let estacion = 'Estacion desconocida';

switch (mes) {
    case 1: case 2: case 12:
        estacion = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
    case 9: case 10: case 11:
        estacion = 'Otoño';
        break;
    default:
        estacion = 'Valor incorrecto';
        break;
}

console.log(estacion);






/*
let numero = 1;

let numeroTexto = 'valor desconocido';

switch (numero) {
    case 1:
        numeroTexto = 'Numero uno';
        break;
    case 2:
        numeroTexto = 'Numero dos';
        break;
    case 3:
        numeroTexto = 'numero tres';
        break;
    case 4:
        numeroTexto = 'numero cuatro';
    default:
        numeroTexto = 'Caso no encontrado';
        break;
}

console.log(numeroTexto);
*/