//En js casi todo lo que manejamos son objetos
//Programacion orientada a objetos jajajajaj

let x = 10
console.log(x.length);

let persona = {
    nombre: 'Andres',
    apellido: 'Giraldo',
    email: 'alixon0134@hotmail.com',
    edad: 24,
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    },
    //miFuncion: function () {
        //prueba
    //}
}
//Acceder a las propiedades de un objeto

console.log(persona['apellido']);

//for in

for( nombrePropiedad in persona) {
        console.log(nombrePropiedad);
        console.log(persona[nombrePropiedad]);
    }





console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);

console.log(persona);

console.log(persona.nombreCompleto());

let persona2 = new Object();
persona2.nombre = 'Jana';
persona2.apellido = 'Espejo';
persona2.direccion = 'Saturno15';
persona2.tel = 3144832112;

console.log(persona2.tel);
console.log(persona2.nombre);