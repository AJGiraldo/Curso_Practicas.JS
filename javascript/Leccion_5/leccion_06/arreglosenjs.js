//Arreglos en javaScript
// diferentes formas de declarar arreglos

//let autos = new Array('BMW', 'Mercedes Benz', 'Volvo');
const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);

//Un Array o arreglo puede almacenar varios valores de tipo arreglo de una sola vez
// Acceder a elementos de un arreglo
//Los arreglos inician con el indice 0 ,= '0' , cero = primer elemento

autos[0]

console.log(autos[0]);
console.log(autos[2]);

//si queremos recorrer todo el arreglo usamor un ciclo

for (let i = 0; i < autos.length; i++) {
    console.log(i + ' : ' + autos[i]);
}

//Ahora veremos como modificar elementos de una arreglo
//Por ejemplo modificar el 'BMW' en el arreglo

autos[1] = 'MercedesBenz'
console.log(autos);

// y si queremos agregar un nuevo valor o elemento ha un arreglo-array
//Nombredelarreglo.push('add');
autos.push('Audi');
console.log(autos);

//otras formas de agregar elementos a un arreglo
//ver cantidad de elementos que tiene un arreglo

console.log(autos.length);

autos[autos.length] = 'Cadillac'
console.log(autos);

//no estamos dejando huecos en el arreglo

autos[5] = 'Porshe';
console.log(autos);

//preguntar si es un arreglo en js


console.log(typeof autos);
console.log( Array.isArray(autos));
console.log(autos instanceof Array);