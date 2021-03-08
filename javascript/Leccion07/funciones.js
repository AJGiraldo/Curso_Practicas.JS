//Una funcion realiza cierta tarea especifica
//La podemos llamar las veces que la necesitemos

//Hoisting  miFuncion(4, 2);

//declaracion de la funcion
function miFuncion(a,b) {
    //las {} llaves son el cuerpo de la funcion
    return a + b;
}

//llamando a la funcion
//podemos llamar la funcion en cualquier parte del programa
//ha esto se le llama Hoisting
miFuncion(2, 3);
miFuncion(8, 6);