/*
comentario de ejemplos de
tipos de datos en java script
en mas de una linea
*/

//comentario de una solalinea

//Tipo de dato string

var nombre = "julian";
console.log(nombre);

nombre = 10;
console.log(typeof nombre)

//tipo de dato numerico
var numero = 1000;
console.log(numero);

// objeto tipo de dato
var objeto = {
    nombre : "juan",
    apellido : "mateus",
    telefono : "3178134587"
}

console.log(typeof objeto)

// Tipo de dato boolean (true, false)
var bandera = false;
console.log( bandera);

// tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion)

//tipo de dato symbol 
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo)

//tipo de dato clase, es una funcion

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

// Tipo de dato undefined
var x;
console.log(typeof x);

x = undefined
console.log(typeof x)

//tipo de dato null = ausencia de valor
var y = null;
console.log(typeof y);

//tipo objeto = arreglo - array
var autos = ['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);

//destalle con valores vacios
var z = '';
console.log(z);
console.log(typeof z);
