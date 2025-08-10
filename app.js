// Arrays
let array = [];
let listaDeNomesSorteados = [];

// Adiciona os nomes na Lista chamada "Array"
function adicionarAmigo(){
    let armazenandoNome = document.querySelector('input').value;
    if (array.includes(armazenandoNome)){
        exibirMensagemNaTela('h2','Digite nome e sobrenome, esse nome já existe dentro da lista');
    }else if(armazenandoNome == ''){
        alert('Por favor, Insira um nome!');
    }else{
        exibirMensagemNaTela('h2', 'Digite o nome dos seus amigos');
        array.push(armazenandoNome);
        limparCampo();
        listaDeAmigos();

        // Pra visualização da Lista no console
        return console.log(array);
    }
}


function exibirMensagemNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
// Lista os nomes na parte debaixo do Input

function listaDeAmigos(){
    let qtdElementoLista = array.length;
    if(qtdElementoLista > 0){
        let lista = document.querySelector('ul');
        lista.innerHTML = '';
        for(let i = 0; i < qtdElementoLista; i++){
            lista.innerHTML += `<li> ${array[i]} </li>`;
        }
    }
}

// Sorteia os nomes da Lista
function sortearAmigo(){
    let qtdElementoLista = array.length;
    //let qtdElementoListaAmigos = listaDeNomesSorteados.length;
    if(qtdElementoLista < 2){
        alert('Adicione pelo menos 2 nomes para o sorteio!');
    }else{
        let resultado = document.getElementById('resultado');
        let numeroAleatorio = parseInt(Math.floor(Math.random()* qtdElementoLista));
        let amigoSorteado = array[numeroAleatorio];
        if(listaDeNomesSorteados.includes(amigoSorteado)){
            sortearAmigo();
            return;
        }else{
            //listaDeNomesSorteados.push(amigoSorteado);
            resultado.innerHTML = `<p> O amigo sorteado foi: ${amigoSorteado}!</p>`;
        }
    }
}


// Limpa o campo assim que clicamos em adiocionar
function limparCampo(){
    armazenandoNome = document.querySelector('input');
    armazenandoNome.value = '';
}