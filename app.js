
let listaAmigos = [];

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function agregarAmigo(){
    let nuevoAmigo =String( document.getElementById('amigo').value);
    console.log(typeof(nuevoAmigo));
    //Verificar un nombre valido: solo letras, puede incluir acentos o letra ñ
    if(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test(nuevoAmigo)){
        //console.log(nuevoAmigo)
        listaAmigos.push(nuevoAmigo);
        //console.log(listaAmigos);
        limpiarCaja();      
    } else{
        //Nombre invalido
        alert('Introduzca un nombre valido');
        limpiarCaja()
    }
    
}

