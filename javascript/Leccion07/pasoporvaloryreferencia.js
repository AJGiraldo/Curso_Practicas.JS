//paso por valor y paso por referencia

//Todo esto de abajo es paso por valor
//Tipos primitivos
let x = 10;//valor primitivo

function cambiarValor(a) {
    a = 20;
}

cambiarValor(x);//10
let y = cambiarValor()
console.log(y);
console.log(x);
console.log(1);

//Aqui veremos paso por referencia

const persona = {
    nombre: 'Andres',
    apellido: 'Giraldo'
}
console.log(persona);
function cambiarValorObjeto(p1){
    p1.nombre = 'Jana';
    p1.apellido = 'Espejo';
}

//paso por referencia
cambiarValorObjeto( persona );
console.log(persona);
