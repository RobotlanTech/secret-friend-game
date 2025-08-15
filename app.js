
let listaAmigos = [];

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function agregarAmigo(){
    let nuevoAmigo = document.getElementById('amigo').value;
    //console.log(nuevoAmigo)
    listaAmigos.push(nuevoAmigo);
    //console.log(listaAmigos);
    limpiarCaja();
    imprimeListaAmigos();
}
/*
function imprimeListaAmigos(){
    let amigos = document.querySelector('listaAmigos');
    amigos.innerHTML = listaAmigos;
}
*/
