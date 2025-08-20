
let amigos = [];

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value.trim(); // .trim() elimina espacios en blanco al inicio y final

    // 1. Validar que el nombre no esté vacío y sea válido
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nuevoAmigo)) {
        alert('Por favor, inserta un nombre válido.');
        limpiarCaja();
        return;
    }

    // 2. Comprobar si el amigo ya existe en la lista
    if (amigos.includes(nuevoAmigo)) {
        // --- INICIA LA NUEVA LÓGICA PARA DUPLICADOS ---

        // Pide el apellido del amigo que YA ESTABA en la lista
        let apellidoExistente = prompt(`Ya existe un amigo llamado '${nuevoAmigo}'. Para diferenciarlo, escribe su apellido o algo que lo identifique:`);
        
        // Si el usuario presiona "Cancelar", no hacemos nada
        if (apellidoExistente === null) {
            limpiarCaja();
            return; 
        }

        // Pide el apellido del NUEVO amigo que se está agregando
        let apellidoNuevo = prompt(`Excelente. Ahora, escribe el apellido del nuevo '${nuevoAmigo}' que quieres agregar:`);

        if (apellidoNuevo === null) {
            limpiarCaja();
            return;
        }

        // Busca el índice del amigo original para poder actualizarlo
        const indiceExistente = amigos.indexOf(nuevoAmigo);
        amigos[indiceExistente] = `${nuevoAmigo} ${apellidoExistente.trim()}`;

        // Agrega el nuevo amigo con su apellido
        amigos.push(`${nuevoAmigo} ${apellidoNuevo.trim()}`);

        // --- TERMINA LA NUEVA LÓGICA ---

    } else {
        // Si no es un duplicado, simplemente lo agregamos como antes
        amigos.push(nuevoAmigo);
    }

    imprimirListaAmigos();
    limpiarCaja();
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
        let indice = Math.floor(Math.random()*amigos.length);
        
        let elementoResultado = document.getElementById('resultado');
        //limpia la lista de html
        elementoResultado.innerHTML = '';
        //Añade al amigo sorteado en la lista de html
        elementoResultado.innerHTML = `<li>${amigos[indice]}</li>`
        
    }
}

