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
console.log(a);

//Aqui veremos paso por referencia

const persona = {
    nombre: 'Andres',
    apellido: 'Giraldo'
}





