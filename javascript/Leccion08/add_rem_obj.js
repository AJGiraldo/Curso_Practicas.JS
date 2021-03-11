let persona = {
    nombre: 'Andres',
    apellido: 'Giraldo',
    email: 'alixon0134@hotmail.com',
    edad: 24,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang( lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    },
}


//Metodo Get en JavaScript y Set
// ya no necesitamos () para invocar en el log la funcion
console.log(persona.nombreCompleto);
console.log( persona.lang);

persona.lang = 'en';

console.log(persona.lang);
console.log(persona.idioma);






/*
//añadir a un objeto
persona.tel = 3144832112;
persona.tel = '3115101565';


console.log(persona);
//eliminar
delete persona.tel;


//diferentes formas de imprimir un Objeto
console.log(persona);
//contatenar cada valor de cada propiedad
console.log(persona.nombre + ', ' + persona.apellido);

//for in
for(nombrePropiedad in persona ){
    console.log(persona[nombrePropiedad]);
}

let personaArray = Object.values( persona );
console.log(personaArray);

let personaString = JSON.stringify( persona );
console.log(personaString);
*/