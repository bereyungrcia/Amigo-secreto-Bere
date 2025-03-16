// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];

function verificarNombre() {
    let ingresaNombre = document.getElementById('nombreValido');
    let nombreAmigo = ingresaNombre.value;

    if (nombreAmigo == ""){
    alert("Por favor, inserte un nombre");
    return;
    }
    amigos.push(nombreAmigo);
    actualizarLista();
    ingresaNombre.value = "";
}

    function actualizarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = ""; 
        
        for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement("li");
            li.textContent = amigos[i];
            lista.appendChild(li);
        }
}

function sortearAmigo (){
    if (amigos.length == 0) {
        alert ("NO hay amigos para sotear, ingrese nombres");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()* amigos.length);
    let amigoAsignado = amigos[indiceAleatorio];
    document.getElementById("resultadoSorteo").innerHTML = "Amigo sorteado: " + amigoAsignado;

    // Eliminar el amigo sorteado del array
    amigos.splice(indiceAleatorio, 1);
    actualizarLista();

}



