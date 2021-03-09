//parametros y argumentos en js
//parametros los que tiene la funcion antes de invocarla
//argumentos son los valores que le damos ha la funcion al momento de llamarla

let sumar = function (a = 4, b = 5) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    arguments[0];
    arguments[1];
    return a + b + arguments[2];
};


resultado = sumar(3, 6, 3);
console.log(resultado);