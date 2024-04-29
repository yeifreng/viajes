import {barcelona, roma, paris, londres} from './ciudades.js'

//Escuchar con cada elemento del DOM

let enlaces = document.querySelectorAll('a');

let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');

//Agregar un evento click a cada enlace

for(let enlace of enlaces){

    enlace.addEventListener('click', function () {
        //Removemos la clase active de todos los enlaces
        for(let enlace of enlaces){
            enlace.classList.remove('active')
        }
        
    //Agregar la clase active en el enlace que le damos click
    this.classList.add('active')

    //obtener la informacion del objeto correspondiente a la eleccion

    let contenido = obtenerContenido(this.textContent);

    //mostrar el contenido en el DOM
    tituloElemento.innerHTML = contenido.titulo;
    subTituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    });
}

//funcion para traer la informacion correcta desde el archivo ciudades.js

function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    };
    return contenido[enlace];
}