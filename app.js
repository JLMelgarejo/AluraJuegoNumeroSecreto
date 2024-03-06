let numeroSecreto=AsignarNumeroSecreto();
let numeroDeIntentos=1;
//se asigna texto con una funcion
function asignarTexto(elemento,texto){
    //esto funciona por si solo, esta siendo usado para automatizar la asignacion de texto
    let parrafo=document.querySelector(elemento);
parrafo.innerHTML=texto;
}

function intentoDeUsuario(){
 let ValorDeIntento= parseInt(document.getElementById('ValorUsuario').value);

//typeof(variable), comprueba el tipo de dato de la variable
//console.log(typeof(ValorDeIntento));
if(ValorDeIntento===nuemroSecreto){
    asignarTexto('p',`Acertaste al numero en ${numeroDeIntentos} ${(numeroDeIntentos===1)?'intento':'intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
}else{
    //usuario no acerto
    if(ValorDeIntento>nuemroSecreto){
        asignarTexto('p','El numero es menor');
    }else{
        asignarTexto('p','El numero es mayor')
    }
}
numeroDeIntentos++;
limpiarCaja();
}

function limpiarCaja(){
    document.getElementById('ValorUsuario').value='';
}
function AsignarNumeroSecreto() {
    return numeroGenerado= Math.floor(Math.random()*10)+1;
    
}

function condicionesIniciales(){
    asignarTexto("h1","Adivina el numero");
    asignarTexto("p","Dame un numero entre 1 y 10");
    nuemroSecreto=AsignarNumeroSecreto();
    numeroDeIntentos=1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
/* arreglos
let numeros=[];
numeros.push(5); agregar un elemento al final del arreglo
numeros.length; tamaño del arreglo
numeros[0] primera posicion del arreglo
console.log(numeros) impresion en consola del arreglo
numeros[numeros.length-1] da el ultimo elemento del arreglo*/

condicionesIniciales();
