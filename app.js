/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 100';
*/

//Variables
let numSec = 0;
let intentos = 0;
let listNumSort = [];
let numMax = 10;

//Función para
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); //document.querySelector (Seleciona en el archivo html el parametro h1)
    elementoHTML.innerHTML = texto; // innerHTML cambia el string del html
    return;
}

function verificarIntento() {
    let numUsr = parseInt(document.getElementById('valorUsr').value);//.querySelector('input'); dandole el id valor usr se busca por getElementById

    if (numSec === numUsr) {
        asignarTextoElemento('p', `Acertaste el número en: ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        //Habilitamos el botón reiniciar juego
        document.getElementById('reiniciar').removeAttribute('disabled');//Quita el disabled
    } else {
        //El usuario no acerto
        if (numUsr > numSec) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsr').value = '';//#=id

}

function condicionesIniciales() {

    asignarTextoElemento('h1', 'Juego del número secreto!'); //Título
    asignarTextoElemento('p', `Indicar un número del 1 al ${numMax}`); //Encabezado
    //Generar el número aleatorio
    numSec = genNumSec();
    //Inicializar el num de intentos
    intentos = 1;
}

function genNumSec() {
    let numGenerad = Math.floor(Math.random() * numMax) + 1;

    console.log(numGenerad);
    console.log(listNumSort);
    //si ya sorteamos todos los números
    if (listNumSort.length == numMax) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    } else {

        //Si el numero generado esta incluido en la lista
        if (listNumSort.includes(numGenerad)) {
            return genNumSec();//Recursividad retornar la misma funcion
        } else {
            listNumSort.push(numGenerad);
            return numGenerad;
        }
    }
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indiciar mensaje de intervalo de num
    //Generar el número aleatorio
    //Inicializar el num de intentos
    condicionesIniciales();
    //Deshabilitar el bóton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();



