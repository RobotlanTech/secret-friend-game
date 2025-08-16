
let amigos = [];

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function agregarAmigo(){
    let nuevoAmigo =String( document.getElementById('amigo').value);
    console.log(typeof(nuevoAmigo));
    //Verificar un nombre valido: solo letras, puede incluir acentos o letra ñ
    if(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test(nuevoAmigo)){
        //console.log(nuevoAmigo)
        amigos.push(nuevoAmigo);
        //console.log(amigos);
        imprimirListaAmigos();
        limpiarCaja(); 
          

    } else{
        //Nombre invalido
        alert('Por favor, inserte un nombre.');
        limpiarCaja();
    }    
}

function imprimirListaAmigos(listaAmigos){
    //obtenemos el elemnto lista de html
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    //recorre el arreglo para agragar los elementos a la lista y luego imprimirlos
    for (var i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
        
      }
}

function sortearAmigo(){
    if(amigos.length < 1){
        console.log('Añade amigos para sortear');
    } else {
        let indice = Math.floor(Math.random()*amigos.length+1);
        let amigoSorteado = amigos[indice-1];
        
        let elementoResultado = document.getElementById('resultado');
        elementoResultado.innerHTML = '';
        let resultado = document.createElement('li');
        resultado.textContent = amigoSorteado;
        elementoResultado.appendChild(resultado);
        
    }
}

