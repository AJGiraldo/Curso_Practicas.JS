//Declaracion de la funcion


function miFuncion(a, b) {
    console.log(arguments.length);
    return a + b;
}

//Llamando a la funcion
let resultado = miFuncion(2, 3);
console.log(resultado);

//funciones tipo Expresion o anonimas
// podemos asignar las funciones a una variable


//declaracion de funcion tipo expresion
let sumar = function (a, b) {
    return a + b;
};

resultado = sumar(1, 2);
console.log(resultado);

//funciones Self-invoking
//funciones que se llaman asi mismas

(function (a, b) {
    console.log('Ejecutando la funcion: ' + (a + b));
})(3, 4);

//funciones como objetos

console.log(typeof miFuncion );

var miFuncionTexto = miFuncion.toString();

console.log(miFuncionTexto);

//funciones Flecha (arro)