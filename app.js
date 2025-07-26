//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
// Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];
let nomeSorteado = '';

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    if (nome == '') {
        alert("Digite um nome valido!");
    }else{
        let lista = document.getElementById('listaAmigos'); // pega a lista
        let novoNome = document.createElement('li');
        novoNome.textContent = nome;
        lista.appendChild(novoNome);
        listaAmigos.push(nome)
        limparCampo()
    }
}

function limparCampo(){
    document.querySelector('input').value = '';
}


function sortearAmigo(){
    if (listaAmigos.length < 2) {
        alert("Não tem nomes suficientes para o sorteio");
    }else{
        let indice = Math.floor(Math.random() * listaAmigos.length);
        nomeSorteado = listaAmigos[indice];
        mostrarResultado(nomeSorteado);
        desabilitarBotoes();
    }
}

function mostrarResultado(nomeSorteado){
    document.getElementById('listaAmigos').style.display = 'none';
    let resultado = document.getElementById('resultado');
    let menssagem = document.createElement('li');
    menssagem.textContent = `O nome sorteado foi ${nomeSorteado}`;
    resultado.appendChild(menssagem);
}

function desabilitarBotoes(){
    document.querySelector('.button-draw').disabled = true;
    document.querySelector('.button-add').disabled = true;
    document.getElementById('amigo').disabled = true;
};
